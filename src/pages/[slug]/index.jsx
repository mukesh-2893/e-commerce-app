import { useState } from "react";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { ColorRing } from "react-loader-spinner";
import { apiHandler } from "@/apiHandlers/api";
import { toast } from "react-toastify";
import { addItem } from "@/redux/cartSlice";
import { useDispatch } from "react-redux";

const ProductPage = ({ product }) => {
  const dispatch = useDispatch();
  // component state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setLoading] = useState(false);

  // images change function
  const navigateImage = (direction) => {
    if (direction === "next") {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % product.images.length
      );
    } else if (direction === "prev") {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + product.images.length) % product.images.length
      );
    }
  };

  // cart adding function
  const addToCart = async () => {
    console.log(product);
    setLoading(true);
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
      toast.error("Something went wrong!sidjfosjf");
    }
  };

  // if product not found from api response (error handle)
  if (!product)
    return <div className="text-center py-4">Product not found</div>;

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* product card */}
            <div className="relative h-96">
              <Image
                src={product.images[currentImageIndex]}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
                    onClick={() => navigateImage("prev")}
                  >
                    <BiChevronLeft className="h-6 w-6 text-gray-600" />
                  </button>
                  <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
                    onClick={() => navigateImage("next")}
                  >
                    <BiChevronRight className="h-6 w-6 text-gray-600" />
                  </button>
                </>
              )}
            </div>
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p className="text-gray-900 text-3xl font-semibold mb-4">
                ₹ {product.price}
              </p>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button
                onClick={!isLoading ? addToCart : undefined}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                {isLoading ? (
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
          </div>
        </div>

        {/* Product Details */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
            <ul className="list-disc pl-6">
              <li>Category: {product.category.name}</li>
              {/* Add more details as needed */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;

export async function getServerSideProps({ params }) {
  try {
    const { slug } = params;
    const data = await apiHandler({
      endpoint: `/products/${slug}`,
    });

    return {
      props: {
        product: data,
      },
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      notFound: true,
    };
  }
}
