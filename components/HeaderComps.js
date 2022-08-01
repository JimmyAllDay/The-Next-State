import ShoppingCart from "./ShoppingCart";
import SearchBar from "./SearchBar";

export default function HeaderComps({ mainNav }) {
  return (
    <div className="w-1/3 justify-end space-x-4 flex mx-auto">
      <SearchBar mainNav={mainNav} />
      <ShoppingCart mainNav={mainNav} />
    </div>
  );
}
