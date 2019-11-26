import React, {useState} from 'react';
import { connect } from 'react-redux'
import { fetchCharacter, clearCharacter } from '../../actions/character'
import './style.css';

const SearchForm = ({fetchCharacter, clearCharacter}) => {
  const [characterName, setCharacterName] = useState('');

  const handleChange = event => {
    setCharacterName(event.target.value);
  }

  const searchCharacter = (event) => {
    event.preventDefault();
    fetchCharacter(characterName);
  }

  const clearSearchCharacter = (event) => {
    event.preventDefault();
    clearCharacter();
    setCharacterName('')
}

  return (
    <section className="container search-form__container">
        <div className="form-row">
            <div className="col-md-10">
            <input type="text" className="form-control" value={characterName} onChange={handleChange}/>
            </div>
            <div className="col-md-1">
                <button className="btn search-form__button" onClick={searchCharacter} type="button">Search</button>
            </div>
            <div className="col-md-1">
                <button className="btn search-form__button" onClick={clearSearchCharacter} type="button">Clear</button>
            </div>
        </div>
    </section>
  );
}

export default connect(null, {fetchCharacter, clearCharacter})(SearchForm);