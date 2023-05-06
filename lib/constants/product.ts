export const BRANDS = ["Nike", "Adidas", "Puma", "Rebook", "Vans"];
export const MATERIALS = ["Leather", "Canvas", "Synthetic", "Mesh"];
export const GENDERS = ["Men", "Women", "Unisex"];
export const STYLES = ["Running", "Basketball", "Skateboarding", "Casual"];

const generateOptions = (items: string[]) => {
  return items.map((item) => {
    const value = item.charAt(0).toLowerCase() + item.slice(1);
    const label = item;
    return { value, label };
  });
};

export const BRANDS_OPTIONS = generateOptions(BRANDS);
export const MATERIALS_OPTIONS = generateOptions(MATERIALS);
export const GENDERS_OPTIONS = generateOptions(GENDERS);
export const STYLES_OPTIONS = generateOptions(STYLES);

export const FILTERS = [
  {
    id: "brand",
    name: "Brand",
    options: BRANDS_OPTIONS,
  },
  {
    id: "material",
    name: "Material",
    options: MATERIALS_OPTIONS,
  },
  {
    id: "gender",
    name: "Gender",
    options: GENDERS_OPTIONS,
  },
  {
    id: "style",
    name: "Style",
    options: STYLES_OPTIONS,
  },
];
