// Flavor Section
interface Flavor {
  name: string;
  color: string;
  rotation: string;
}
export const flavorlists: Flavor[] = [
  {
    name: "Stawberry Milk",
    color: "red",
    rotation: "lg:rotate-[8deg] rotate-0",
  },
  {
    name: "Cookies & Cream",
    color: "blue",
    rotation: "lg:rotate-[-8deg] rotate-0",
  },
  {
    name: "Peanut Butter Chocolate",
    color: "orange",
    rotation: "lg:rotate-[8deg] rotate-0",
  },
  {
    name: "Chocolate Milk",
    color: "brown",
    rotation: "lg:rotate-[-8deg] rotate-0",
  },
  {
    name: "Vanilla Milkshake",
    color: "white",
    rotation: "lg:rotate-[8deg] rotate-0",
  },
  {
    name: "Max Chocolate Milk",
    color: "black",
    rotation: "lg:rotate-[-8deg] rotate-0",
  },
];

// Nutrition Section
interface Nutrient {
  label: string;
  amount: string;
}
export const nutrientLists: Nutrient[] = [
  { label: "Potassium", amount: "245mg" },
  { label: "Calcium", amount: "500mg" },
  { label: "Vitamin A", amount: "176mcg" },
  { label: "Vitamin D", amount: "5mcg" },
  { label: "Iron", amount: "1mg" },
];
