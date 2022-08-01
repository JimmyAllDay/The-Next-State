export default function SearchBar({ mainNav }) {
  return (
    <div
      className={`w-3/4 flex ${mainNav ? "text-gray-500" : "text-gray-200"}`}
    >
      <input
        type="search"
        aria-autocomplete="list"
        aria-controls="react-autowhatever-desktop-search"
        className={`border py-0.5 px-2 rounded-md w-full bg-transparent focus:outline-none hidden sm:inline-block header_search ${
          mainNav
            ? "border-gray-400 focus:border-gray-800 text-gray-800"
            : "border-gray-400 focus:border-gray-100 text-gray-200"
        }`}
        placeholder={`Search...`}
        defaultValue=""
      />
    </div>
  );
}
