import React from 'react'
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);

    return (
        <ul>
           {
               heroes.map(heroe => {

                   return <HeroCard key={heroe.id} heroe={heroe} />
               })
           } 
        </ul>
    )
}
