import { useSearchParams } from "next/navigation";
import { Filters } from "@/components/FilterPanel/FilterPanel";
import { useEffect, useState } from "react";

export const useFilters = (onChange: (filters: Filters) => void) => {
  const searchParams = useSearchParams();
  const parseFilters = (): Filters => {
    const initial: Filters = {};
    if (!searchParams) return initial;
    const getString = (key: keyof Filters) =>
      searchParams.get(key as string) || undefined;
    const getNumber = (key: keyof Filters) => {
      const val = searchParams.get(key as string);
      return val !== null && val !== "" ? Number(val) : undefined;
    };
    initial.gender = getString("gender");
    initial.hair_color = getString("hair_color");
    initial.skin_color = getString("skin_color");
    initial.eye_color = getString("eye_color");
    initial.heightMin = getNumber("heightMin");
    initial.heightMax = getNumber("heightMax");
    initial.massMin = getNumber("massMin");
    initial.massMax = getNumber("massMax");
    return initial;
  };
  const [filters, setFilters] = useState<Filters>(parseFilters);

  useEffect(() => {
    onChange(filters);
  }, [filters]); // whithout onChange
  const updateFilter = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({});
  };

  return { filters, updateFilter, resetFilters };
};
