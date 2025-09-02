import { Hero, HeroResponse } from "@/types/swapiTypes";
const EMPTY_RESPONSE: HeroResponse = {
  results: [],
  count: 0,
  next: null,
  previous: null,
};
const EMPTY_HERO: Hero | null = null;
export const SWAPI_PEOPLE_API_URL = "https://swapi.py4e.com/api/people";
interface FetchPeopleParams {
  page: number;
  search?: string;
}
export async function fetchPeople({
  page,
  search,
}: FetchPeopleParams): Promise<HeroResponse> {
  try {
    const url = new URL(SWAPI_PEOPLE_API_URL);
    url.searchParams.set("page", page.toString());
    if (search) url.searchParams.set("search", search);

    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      console.error(`SWAPI error: ${res.status} ${res.statusText}`);
      return EMPTY_RESPONSE;
    }
    return res.json();
  } catch (error) {
    console.error(`[SWAPI FETCH FAILED]:`, error);
    return EMPTY_RESPONSE;
  }
}

export async function fetchHero(id: string): Promise<Hero | null> {
  try {
    const url = `${SWAPI_PEOPLE_API_URL}/${id}/`;
    const res = await fetch(url, {
      cache: "no-store",
    });
    if (!res.ok) {
      console.error(
        `[SWAPI ERROR]: ${res.status} ${res.statusText} for hero ID ${id}`
      );

      return EMPTY_HERO;
    }

    return (await res.json()) as Hero;
  } catch (error) {
    console.error(`[SWAPI FETCH FAILED for hero ID ${id}]:`, error);
    return EMPTY_HERO;
  }
}
