export type ProductBrand = "Nike" | "Adidas" | "Puma" | "Rebook" | "Vans";
export type ProductMaterial = "Leather" | "Canvas" | "Synthetic" | "Mesh";
export type ProductGender = "Men" | "Women" | "Unisex";
export type ProductStyle =
  | "Running"
  | "Basketball"
  | "Skateboarding"
  | "Casual";

export type Product = {
  id: number;
  product_id: number;
  brand: ProductBrand;
  model: string;
  size: number;
  price: number;
  material: ProductMaterial;
  release_date: string;
  gender: ProductGender;
  style: ProductStyle;
  image: string;
  color: string;
};
