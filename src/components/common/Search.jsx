import axios from "axios";
import { useState, useEffect, useRef, useCallback } from "react";
import debounce from "lodash/debounce";
import { apiHandler } from "@/apiHandlers/api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setProducts } from "@/redux/productSlice";

const Search = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = useCallback(async (query) => {
    console.log(query);
    if (query.length <= 2) {
      setSuggestions([]);
      return;
    }
    try {
      const response = await apiHandler({
        endpoint: "suggestions",
        params: { query },
      });
      setSuggestions(response);
    } catch (err) {
      console.error("Error fetching suggestions:", err);
    }
  }, []);

  // Create a debounced fetch suggestions
  const debouncedFetchSuggestions = useRef(
    debounce((query) => {
      fetchSuggestions(query);
    }, 1000)
  ).current;

  useEffect(() => {
    debouncedFetchSuggestions(query);
    // Cleanup function to cancel debounce on unmount
    return () => {
      debouncedFetchSuggestions.cancel();
    };
  }, [query, debouncedFetchSuggestions]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setSuggestions([]);
    try {
      const data = await apiHandler({
        endpoint: "search",
        data: { search: query },
        method: "POST",
      });
      dispatch(setProducts(data));
      setSuggestions([]);
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

  return (
    <form onSubmit={handleSearch} className="flex relative">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search products..."
        className="p-2 border rounded w-full md:w-auto text-gray-800"
        style={{ minWidth: "200px" }}
      />
      <button
        type="submit"
        className="ml-2 p-2 border rounded bg-blue-500 text-white"
      >
        Search
      </button>
      {suggestions.length > 0 && (
        <ul className="border rounded bg-gray-800 shadow-md absolute w-full mt-12 z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="p-2 cursor-pointer hover:bg-gray-600"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default Search;
