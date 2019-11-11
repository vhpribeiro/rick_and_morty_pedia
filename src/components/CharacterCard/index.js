import React from 'react'

const CharacterCard = ({character}) => (
    <div className="card">
        <img src={character.image} className="card-img-top" alt={character.name}/>
        <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text"><strong>Species:</strong>  {character.species}</p>
            <p className="card-text"><strong>Status:</strong>  {character.status}</p>
            {/* <p className="card-text"><strong>Origin:</strong>  {character.origin.name}</p> */}
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
)

export default CharacterCard;