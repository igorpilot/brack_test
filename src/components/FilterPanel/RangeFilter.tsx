interface RangeFilterProps {
  label: string;
  minValue?: number;
  maxValue?: number;
  onChangeMin: (val?: number) => void;
  onChangeMax: (val?: number) => void;
}

export const RangeFilter = ({
  label,
  minValue,
  maxValue,
  onChangeMin,
  onChangeMax,
}: RangeFilterProps) => {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeMin(e.target.value ? Number(e.target.value) : undefined);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeMax(e.target.value ? Number(e.target.value) : undefined);
  };
  return (
    <div>
      <label className="block text-sm font-semibold mb-1 text-yellow-400">
        {label}
      </label>
      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Min"
          className="input"
          value={minValue ?? ""}
          onChange={handleMinChange}
        />
        <input
          type="number"
          placeholder="Max"
          className="input"
          value={maxValue ?? ""}
          onChange={handleMaxChange}
        />
      </div>
    </div>
  );
};
