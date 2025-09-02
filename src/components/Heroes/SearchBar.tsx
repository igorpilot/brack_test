import { useDebounce } from "@/hooks/useSearch";
import { useEffect, useState } from "react";
interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
}
export const SearchBar = ({
  value,
  onChange,
}: SearchBarProps) => {
  const [inputValue, setInputValue] = useState(value);
  const debouncedValue = useDebounce(inputValue, 100);

  useEffect(() => {
    if (debouncedValue !== value) {
      onChange(debouncedValue);
    }
  }, [debouncedValue, value, onChange]);
  return (
    <div className="max-w-md mb-4">
      <input
        type="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search hero by name..."
        className="w-full border border-gray-700 rounded-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-yellow-200 "
      />
    </div>
  );
};
