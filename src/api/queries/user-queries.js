import { useQuery } from "@tanstack/react-query";
import { getCarts } from "../api";

const USERS_QUERY_KEY = "carts";
const CATEGORY_QUERY_KEY = "categories";
const CART_QUERY_KEY = "cart";

export const useUserQueries = () => {
  return useQuery({ queryKey: [USERS_QUERY_KEY], queryFn: getUsers });
};
