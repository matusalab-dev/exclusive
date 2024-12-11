import { useQuery } from "@tanstack/react-query";
import { getCartsAddedByUser } from "../api";

const CARTS_QUERY_KEY = "carts";
const CATEGORY_QUERY_KEY = "categories";
const CART_QUERY_KEY = "cart";

// export const useCartQueries = () => {
//   return useQuery({ queryKey: [CARTS_QUERY_KEY], queryFn: getCarts });
// };

export const useUserCarts = (userid) => {
  return useQuery({
    queryKey: [CART_QUERY_KEY],
    queryFn: () => getCartsAddedByUser(userid),
  });
};
