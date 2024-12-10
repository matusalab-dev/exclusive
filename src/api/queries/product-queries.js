import { useQuery } from "@tanstack/react-query";
import { getProductById, getProducts, getAllCategories } from "../api";

const PRODUCTS_QUERY_KEY = "products";
const CATEGORY_QUERY_KEY = "categories";
const PRODUCT_QUERY_KEY = "product";

export const useProductQueries = () => {
  return useQuery({ queryKey: [PRODUCTS_QUERY_KEY], queryFn: getProducts });
};
export const useProductQueriesById = (productid) => {
  return useQuery({
    queryKey: [PRODUCT_QUERY_KEY, productid],
    queryFn: () => getProductById(productid),
  });
};
export const useAllProductCategories = () => {
  return useQuery({
    queryKey: [CATEGORY_QUERY_KEY],
    queryFn: getAllCategories,
  });
};
