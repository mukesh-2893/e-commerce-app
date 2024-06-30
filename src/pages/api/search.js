import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { search } = req.body;
      await client.connect();
      const db = client.db("e-commerce-app-db");
      const collection = db.collection("products");

      const query = {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { "category.name": { $regex: search, $options: "i" } },
        ],
      };

      const products = await collection.find(query).toArray();
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while searching for products" });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

export default handler;
