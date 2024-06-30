import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function addToCartHandler(req, res) {
  // add cart items api
  if (req.method === "POST") {
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({ error: "Product ID is required" });
    }

    try {
      await client.connect();
      const db = client.db("e-commerce-app-db");
      const cartCollection = db.collection("cart");
      const productCollection = db.collection("products");

      // Check if product exists
      const product = await productCollection.findOne({
        id: Number(productId),
      });
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      // Add to cart
      const cartItem = await cartCollection.findOne({
        productId: Number(productId),
      });

      let updatedCartItem;
      if (cartItem) {
        // If the item already exists in the cart, increase the quantity
        await cartCollection.updateOne(
          { productId: Number(productId) },
          { $inc: { quantity: 1 } }
        );
        updatedCartItem = await cartCollection.findOne({
          productId: Number(productId),
        });
      } else {
        // If the item doesn't exist, add it to the cart
        await cartCollection.insertOne({
          productId: Number(productId),
          product: product,
          quantity: 1,
          addedAt: new Date(),
        });
        updatedCartItem = await cartCollection.findOne({
          productId: Number(productId),
        });
      }

      res.status(200).json({
        message: "Product added to cart",
        cartItem: updatedCartItem,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "An error occurred while adding the product to the cart",
      });
    } finally {
      await client.close();
    }
  }

  // get cart items api
  else if (req.method === "GET") {
    try {
      await client.connect();
      const db = client.db("e-commerce-app-db");
      const collection = db.collection("cart");
      const cart = await collection.find({}).toArray();
      res.status(200).json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while fetching cart" });
    } finally {
      await client.close();
    }
  }

  // remove cart api
  else if (req.method === "DELETE") {
    const { id } = req.body;
    try {
      if (!ObjectId.isValid(id)) {
        res.status(400).json({ error: "Invalid ID format" });
        return;
      }

      await client.connect();
      const db = client.db("e-commerce-app-db");
      const cartCollection = db.collection("cart");

      const result = await cartCollection.deleteOne({ _id: new ObjectId(id) });
      console.log("Delete result:", result);

      if (result.deletedCount === 0) {
        res.status(404).json({ error: "Item not found in cart" });
      } else {
        res.status(200).json({ message: "Item removed from cart" });
      }
    } catch (error) {
      console.error("Error occurred while deleting item:", error);
      res.status(500).json({
        error: "An error occurred while removing the item from the cart",
      });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

export default addToCartHandler;
