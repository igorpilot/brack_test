"use client";

import {
  eyeOptions,
  genderOptions,
  hairOptions,
  skinOptions,
} from "@/data/filterOptions";
import { useFilters } from "@/hooks/useFilters";
import { SelectFilter } from "@/components/FilterPanel/SelectFilter";
import { RangeFilter } from "@/components/FilterPanel/RangeFilter";

export interface Filters {
  gender?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  heightMin?: number;
  heightMax?: number;
  massMin?: number;
  massMax?: number;
}

interface Props {
  onChange: (filters: Filters) => void;
}

export const FilterPanel = ({ onChange }: Props) => {
  const { filters, resetFilters, updateFilter } = useFilters(onChange);

  return (
    <fieldset className="p-4 rounded-xl bg-gray-800 border border-gray-700">
      <h3 className="text-lg font-bold text-yellow-400 mb-4">Filters</h3>
      <div className="space-y-4">
        <SelectFilter
          label="Gender"
          value={filters.gender}
          options={genderOptions}
          onChange={(v) => updateFilter("gender", v)}
        />
        <SelectFilter
          label="Hair Color"
          value={filters.hair_color}
          options={hairOptions}
          onChange={(v) => updateFilter("hair_color", v)}
        />
        <SelectFilter
          label="Skin Color"
          value={filters.skin_color}
          options={skinOptions}
          onChange={(v) => updateFilter("skin_color", v)}
        />
        <SelectFilter
          label="Eye Color"
          value={filters.eye_color}
          options={eyeOptions}
          onChange={(v) => updateFilter("eye_color", v)}
        />
        <RangeFilter
          label="Height"
          minValue={filters.heightMin}
          maxValue={filters.heightMax}
          onChangeMin={(v) => updateFilter("heightMin", v)}
          onChangeMax={(v) => updateFilter("heightMax", v)}
        />
        <RangeFilter
          label="Mass"
          minValue={filters.massMin}
          maxValue={filters.massMax}
          onChangeMin={(v) => updateFilter("massMin", v)}
          onChangeMax={(v) => updateFilter("massMax", v)}
        />
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={resetFilters}
          className="px-3 py-1 text-sm bg-gray-700 text-yellow-400 rounded hover:bg-gray-600 transition"
        >
          Reset Filters
        </button>
      </div>
    </fieldset>
  );
};
