import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await client.connect();
      const db = client.db("e-commerce-app-db");
      const collection = db.collection("products");
      const products = await collection.find({}).toArray();
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while fetching products" });
    } finally {
      await client.close();
    }
  }

  // if you want to add product then use this api
  else if (req.method === "POST") {
    try {
      await client.connect();
      const db = client.db("e-commerce-app-db");
      const collection = db.collection("products");
      const products = req.body;
      const result = await collection.insertMany(products);
      res
        .status(201)
        .json({ message: "Products inserted successfully!", result });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "An error occurred while inserting products" });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

export default handler;
