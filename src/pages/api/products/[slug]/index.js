import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function handler(req, res) {
  const { slug } = req.query;
  if (req.method === "GET") {
    try {
      await client.connect();
      const db = client.db("e-commerce-app-db");
      const collection = db.collection("products");
      const product = await collection.findOne({ id: Number(slug) });
      if (!product) {
        res.status(404).json({ error: "Product not found" });
      } else {
        res.status(200).json(product);
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching the product" });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

export default handler;
