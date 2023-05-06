import PRODUCTS from "@/lib/data/data.json";
import type { Product } from "~/lib/types/product";

export default defineEventHandler((event) => {
  const query = getQuery(event) as { start?: number; limit?: number };

  const data = query?.limit
    ? [...PRODUCTS].slice(query?.start ?? 0, query.limit)
    : PRODUCTS;

  return data as Product[];
});
