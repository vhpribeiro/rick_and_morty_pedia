import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCharacter } from '../../actions/character';
import './style.css';

const CharacterCard = ({character, fetchCharacter}) => {
    
    let history = useHistory();
    const handleClick = (event) => {
        event.preventDefault();
        console.log(character.id)
        fetchCharacter(character.id);
        history.push(`/character/${character.id}`);
    } 

    return (
    <div className="card characters-card">
        <img src={character.image} className="card-img-top" alt={character.name}/>
        <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text"><strong>Species:</strong>  {character.species}</p>
            <p className="card-text"><strong>Status:</strong>  {character.status}</p>
            <button type="button" onClick={handleClick} className="btn characters-card__button">More details!</button>
        </div>
    </div>
)}

const mapDispatchToProps = dispatch => {
    return {
        fetchCharacter: (id) => dispatch(fetchCharacter(id))
    }
}

export default connect(null, mapDispatchToProps)(CharacterCard);