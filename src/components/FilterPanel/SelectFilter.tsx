interface SelectFilterProps {
  label: string;
  value?: string;
  options: string[];
  onChange: (val?: string) => void;
}

export const SelectFilter = ({
  label,
  value,
  options,
  onChange,
}: SelectFilterProps) => {
  const sortedOptions = [...options].sort();
  return (
    <div>
      <label className="block text-sm font-semibold mb-1 text-yellow-400">
        {label}
      </label>
      <select
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value || undefined)}
        className="select"
      >
        <option value="">{`All ${label}`}</option>
        {sortedOptions.map((opt) => (
          <option key={opt.toLowerCase()} value={opt.toLowerCase()}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};
