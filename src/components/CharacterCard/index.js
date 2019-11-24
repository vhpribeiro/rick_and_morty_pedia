import React from 'react'
import './style.css'

const CharacterCard = ({character}) => (
    <div className="card characters-card">
        <img src={character.image} className="card-img-top" alt={character.name}/>
        <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text"><strong>Species:</strong>  {character.species}</p>
            <p className="card-text"><strong>Status:</strong>  {character.status}</p>
            {/* <p className="card-text"><strong>Origin:</strong>  {character.origin.name}</p> */}
            <a href="#" className="btn characters-card__button">More details!</a>
        </div>
    </div>
)

export default CharacterCard;