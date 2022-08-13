import ShoppingCart from "./ShoppingCart";
import SearchBar from "./SearchBar";

export default function HeaderComps({ mainNav }) {
  return (
    <div className="md:w-1/3 space-x-4 flex border">
      <SearchBar mainNav={mainNav} />
      <ShoppingCart mainNav={mainNav} />
    </div>
  );
}
