import { Icon } from "@iconify/react";

export default function SearchBar({ mainNav, closeSignIn, closeCart }) {
  return (
    <div
      className={`${
        mainNav ? "flex" : "hidden"
      } text-gray-500 hover:text-gray-800 hover:cursor-pointer my-auto`}
    >
      <Icon icon="ci:search" className="text-2xl my-auto mr-1" />
      <p
        onMouseOver={() => {
          closeSignIn();
          closeCart();
        }}
        className=""
      >
        Search
      </p>
    </div>
  );
}
