import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function handler(req, res) {
  const { query } = req.query;

  try {
    await client.connect();
    const db = client.db("e-commerce-app-db");
    const collection = db.collection("products");
    const productsCursor = await collection
      .find({ title: { $regex: query, $options: "i" } })
      .limit(5);

    const productsArray = await productsCursor.toArray(); // Convert cursor to array
    const suggestions = productsArray.map((product) => product.title);

    res.status(200).json(suggestions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
