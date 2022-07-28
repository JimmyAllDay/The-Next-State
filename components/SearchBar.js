export default function SearchBar({ fontColor }) {
  return (
    <div className={`w-3/4 flex ${fontColor}`}>
      <input
        type="search"
        autocomplete="off"
        aria-autocomplete="list"
        aria-controls="react-autowhatever-desktop-search"
        className={`border-2 py-0.5 px-2 rounded-md w-full bg-transparent ${fontColor}`}
        placeholder={`Search...`}
        value=""
      />
    </div>
  );
}
