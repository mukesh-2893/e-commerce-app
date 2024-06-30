"use client";

// next js imports
import { useState, useEffect } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

// third part library imports
import { ColorRing } from "react-loader-spinner";
import { toast } from "react-toastify";

// import external css
import "react-toastify/dist/ReactToastify.css";
import { apiHandler } from "@/apiHandlers/api";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "@/redux/productSlice";
import { addItem } from "@/redux/cartSlice";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ product = [] }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [loadingProduct, setLoadingProduct] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    dispatch(setProducts(product));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToCart = async (product) => {
    console.log(product);
    if (loading) return; // Prevent multiple clicks while loading api
    setLoading(product.id);

    try {
      const data = await apiHandler({
        endpoint: "/my-cart",
        method: "POST",
        data: { productId: product.id },
      });
      setLoading(null);
      toast.success("Product added successfully!");
      dispatch(addItem(data.cartItem));
    } catch (error) {
      setLoading(null);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className={`min-h-screen bg-gray-100 py-12 ${inter.className}`}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          E-commerce Website
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products &&
            products.map((product, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg relative"
              >
                {loadingProduct === product.id && (
                  <div className="absolute inset-0 bg-white bg-opacity-75 flex justify-center items-center z-1">
                    <ColorRing
                      visible={true}
                      height="100"
                      width="100"
                      ariaLabel="color-ring-loading"
                      wrapperStyle={{}}
                      wrapperClass="color-ring-wrapper"
                      colors={["#1f2937"]}
                    />
                  </div>
                )}
                <Link href={`/${product.id}`}>
                  <div
                    className={`w-full h-48 relative mb-4 ${
                      loadingProduct === product.id ? "pointer-events-none" : ""
                    }`}
                    onClick={() => setLoadingProduct(product.id)}
                  >
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-t-lg"
                    />
                  </div>
                  <h2
                    className="text-2xl font-semibold mb-2"
                    onClick={() => setLoadingProduct(product.id)}
                  >
                    {product.title}
                  </h2>
                </Link>
                <p className="text-xl text-gray-700">₹ {product.price}</p>
                <button
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
                  onClick={() => !loading && addToCart(product)}
                >
                  {loading === product.id ? (
                    <ColorRing
                      visible={true}
                      height="20"
                      width="80"
                      ariaLabel="color-ring-loading"
                      wrapperStyle={{}}
                      wrapperClass="color-ring-wrapper"
                      colors={["#ffff", "#ffff", "#ffff", "#ffff", "#ffff"]}
                    />
                  ) : (
                    "Add to Cart"
                  )}
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

// note : I have use getServerSideProps but it is giving me issue after deployed on netlify
//        So, I use getStaticProps for now
//        you can test with both

// export async function getServerSideProps() {
//   try {
//     const data = await apiHandler({
//       endpoint: "/products",
//     });

//     return {
//       props: {
//         product: data,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     return {
//       notFound: true,
//     };
//   }
// }

export async function getStaticProps() {
  try {
    const data = await apiHandler({
      endpoint: "/products",
    });

    return {
      props: {
        product: data,
      },
      revalidate: 10, // Regenerate the page at most every 10 seconds
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      notFound: true,
    };
  }
}
