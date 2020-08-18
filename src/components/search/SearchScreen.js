import React, { useState } from 'react';
import { heroes } from '../data/heroes';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = () => {

    const allHeroes = heroes;
    const [heroesFiltered, setHeroes] = useState([]);

    const handleSearch = (e) => {

        e.preventDefault();
        const heroSearch = document.querySelector('#search-input').value;

        setHeroes(allHeroes.filter(hero => hero.superhero.toLowerCase().includes(heroSearch.toLowerCase())));
    }

    return (
        <div>
            <h3>Search Screen</h3>
            <hr></hr>
            <div className="row">

                <div className="col-5">
                    <h4>Search form</h4>
                    <hr></hr>

                    <form>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            id="search-input"
                         />

                         <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-success"
                            onClick={handleSearch}
                         >
                            Search..
                         </button>
                    </form>

                </div>

                <div className="col-7">
                    <h4> Results </h4>
                    <hr></hr>

                    {
                        heroesFiltered.map(hero => {

                           return <HeroCard 
                                key={hero.id}
                                heroe={hero}
                            />
                        })
                    }

                </div>
            </div>
        </div>
    )
}
