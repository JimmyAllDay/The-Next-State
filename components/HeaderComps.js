import ShoppingCart from "./ShoppingCart";
import SearchBar from "./SearchBar";

export default function HeaderComps({ fontColor }) {
  return (
    <div className="flex w-1/3 justify-end space-x-4">
      <SearchBar fontColor={fontColor} />
      <ShoppingCart fontColor={fontColor} />
    </div>
  );
}
