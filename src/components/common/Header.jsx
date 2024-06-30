import { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Search from "./Search";
import { PiShoppingCartBold } from "react-icons/pi";
import { FaShopify } from "react-icons/fa";
import { useRouter } from "next/router";
import { setItems } from "@/redux/cartSlice";
import { apiHandler } from "@/apiHandlers/api";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItemsCount = useSelector((state) => state.cart.count);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const data = await apiHandler({
          endpoint: "/my-cart",
        });
        dispatch(setItems(data));
        // setLoading(false);
      } catch (err) {
        console.log("Error while fetching data from cart", err);
      }
    };

    fetchCartItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="bg-gray-800 text-white py-4 md:px-8 lg:px-16 sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo or brand name */}
        <Link href="/" className="ml-4 md:ml-0">
          <FaShopify size={32} />
        </Link>

        {/* Search component */}
        {router.pathname === "/" && (
          <Search className="mt-4 md:mt-0 flex-grow" />
        )}

        {/* Cart link */}
        <Link
          href="/my-cart"
          className="relative mt-4 md:mt-0 ml-4 md:ml-0 mr-4"
        >
          <div className="relative">
            <PiShoppingCartBold size={32} />

            {/* Cart items count */}
            {cartItemsCount > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {cartItemsCount}
              </span>
            )}
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
