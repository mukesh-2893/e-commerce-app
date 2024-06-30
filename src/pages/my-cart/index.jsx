import { apiHandler } from "@/apiHandlers/api";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { removeItem, setItems } from "@/redux/cartSlice";
import Link from "next/link";
import { useRouter } from "next/router";

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [loading, setLoading] = useState(false);
  const [loadingItem, setLoadingItem] = useState(null);

  const handleRemoveItem = async (item) => {
    const id = item._id;
    setLoadingItem(id);

    try {
      await apiHandler({
        endpoint: "my-cart",
        method: "DELETE",
        data: { id },
      });
      toast.success("Product removed from cart");
      dispatch(removeItem(id));
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoadingItem(null);
    }
  };

  const checkout = async () => {
    setLoading(true);
    await apiHandler({
      endpoint: "checkout",
      method: "DELETE",
    });
    dispatch(setItems([]));
    router.push("/");
  };

  const totalPrice =
    cartItems &&
    cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {!cartItems ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="border p-4 rounded shadow-md">
              <Skeleton height={100} width="250px" />
              <Skeleton
                height={24}
                width="60%"
                style={{ margin: "0.5rem 0" }}
              />
              <Skeleton height={24} width="80%" />
            </div>
          ))}
        </div>
      ) : cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cartItems.map((item) => (
            <div key={item._id} className="border p-4 rounded shadow-md">
              <Link href={`/${item.productId}`}>
                <Image
                  src={item.product.images[0]}
                  alt={item.product.name}
                  title={item.product.name}
                  className="w-full h-32 object-contain mb-4"
                  width={100}
                  height={100}
                />
                <h2 className="text-xl font-bold">{item.product.title}</h2>
              </Link>
              <p className="text-gray-600">₹ {item.product.price}</p>
              <div className="flex items-center mt-2">
                <label className="mr-2">Quantity:</label>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(
                      item.productId,
                      parseInt(e.target.value)
                    )
                  }
                  className="w-16 border p-1 rounded"
                />
              </div>
              <button
                onClick={() => handleRemoveItem(item)}
                className="mt-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded"
              >
                {loadingItem === item._id ? (
                  <ColorRing
                    visible={true}
                    height="25"
                    width="80"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={["#fffff", "#fffff", "#fffff", "#fffff", "#fffff"]}
                  />
                ) : (
                  "Remove"
                )}
              </button>
            </div>
          ))}
        </div>
      )}
      {cartItems.length !== 0 && (
        <div className="mt-4 text-right">
          <h2 className="text-2xl font-bold">Total: ₹ {totalPrice}</h2>
          <button
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
            onClick={checkout}
          >
            {loading ? (
              <ColorRing
                visible={true}
                height="25"
                width="180"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={["#fffff", "#fffff", "#fffff", "#fffff", "#fffff"]}
              />
            ) : (
              "Proceed to Checkout"
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
