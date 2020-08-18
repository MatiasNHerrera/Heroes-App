import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroesById } from '../selectors/getHeroesById';

export const HeroScreen = ({history}) => {

    const { heroeId } = useParams();

    const heroe = getHeroesById(heroeId);

    if( heroe.length < 1 )
    {
        history.push('/');
    }

    const handleReturn = () =>{
        history.goBack();
    }

    const {

        superhero,
        alter_ego,
        publisher,
        first_appearance,
        characters

    } = heroe[0];

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ `../assets/${ heroeId }.jpg` }
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                    <li className="list-group-item"> <b> First appearance: </b> { first_appearance } </li>
                </ul>

                <h5> Characters </h5>
                <p> { characters } </p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>
        </div>
    )
}
