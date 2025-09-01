import { HeroesList } from "@/components/Heroes/HeroesList"
import { HeroResponse } from "@/types/swapiTypes"


export default async function Page() {
    const res = await fetch('https://swapi.py4e.com/api/people')
    const initialData:HeroResponse = await res.json()

    return <HeroesList initialData={initialData}/>
}