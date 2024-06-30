import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function addToCartHandler(req, res) {
  if (req.method === "DELETE") {
    try {
      await client.connect();
      const db = client.db("e-commerce-app-db");
      const cartCollection = db.collection("cart");

      const result = await cartCollection.deleteMany({});
      console.log("Delete all result:", result);

      res.status(200).json({ message: "All items removed from cart" });
    } catch (error) {
      console.error("Error occurred while deleting all items:", error);
      res.status(500).json({
        error: "An error occurred while removing all items from the cart",
      });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

export default addToCartHandler;
