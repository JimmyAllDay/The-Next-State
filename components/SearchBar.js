export default function SearchBar({ mainNav }) {
  return (
    <>
      <input
        type="search"
        aria-autocomplete="list"
        className={`border py-0.5 px-2 rounded-md w-full bg-transparent focus:outline-none ${
          mainNav
            ? "border-gray-400 focus:border-gray-800 text-gray-800"
            : "border-gray-400 focus:border-gray-100 text-gray-200"
        }`}
        placeholder={`Search...`}
        defaultValue=""
      />
    </>
  );
}
