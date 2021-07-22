import { useState, useEffect } from "react";
import { paginate } from "../utils/utils";
const url = "https://api.github.com/users?per_page=100";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setData(paginate(data));
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data };
};
