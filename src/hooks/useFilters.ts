import { useSearchParams } from "next/navigation";
import { Filters } from "@/components/FilterPanel/FilterPanel";
import { useEffect, useState } from "react";

export const useFilters = (onChange: (filters: Filters) => void) => {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<Filters>(() => {
    const initial: Filters = {};
    if (searchParams) {
      if (searchParams.get("gender"))
        initial.gender = searchParams.get("gender")!;
      if (searchParams.get("hair_color"))
        initial.hair_color = searchParams.get("hair_color")!;
      if (searchParams.get("skin_color"))
        initial.skin_color = searchParams.get("skin_color")!;
      if (searchParams.get("eye_color"))
        initial.eye_color = searchParams.get("eye_color")!;
      if (searchParams.get("heightMin"))
        initial.heightMin = Number(searchParams.get("heightMin"));
      if (searchParams.get("heightMax"))
        initial.heightMax = Number(searchParams.get("heightMax"));
      if (searchParams.get("massMin"))
        initial.massMin = Number(searchParams.get("massMin"));
      if (searchParams.get("massMax"))
        initial.massMax = Number(searchParams.get("massMax"));
    }
    return initial;
  });

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
