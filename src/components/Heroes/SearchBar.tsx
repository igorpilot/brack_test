export const SearchBar = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => {
  return (
    <div className="max-w-md mb-4">
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search hero by name..."
        className="w-full border border-gray-700 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-yellow-200 "
      />
    </div>
  );
};
