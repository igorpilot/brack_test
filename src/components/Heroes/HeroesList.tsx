"use client"

import { HeroResponse } from "@/types/swapiTypes"
import { HeroCard } from "./HeroCard"
interface Props {
    initialData: HeroResponse
}
export const HeroesList =({ initialData }: Props)=>{
    
    return (
        <div className="min-h-screen bg-gray-800 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {initialData.results.map((hero)=>(
                <HeroCard key={hero.url} hero={hero}/>
            ))}
            </div>
            
        </div>
    )
}