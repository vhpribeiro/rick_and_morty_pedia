import React, {useState} from 'react';
import { connect } from 'react-redux'
import { fetchCharacters } from '../../actions/characters'
import { searchCharacter } from '../../actions/character';
import './style.css';

const SearchForm = ({fetchCharacters, searchCharacter}) => {
  const [characterName, setCharacterName] = useState('');

  const handleChange = event => {
    setCharacterName(event.target.value);
  }

  const searchCharacterForName = (event) => {
    event.preventDefault();
    fetchCharacters(1, characterName);
    searchCharacter(characterName);
  }

  const clearSearchCharacter = (event) => {
    event.preventDefault();
    fetchCharacters();
    setCharacterName('');
    searchCharacter('');
}

  return (
    <section className="container search-form__container">
        <div className="form-row">
            <div className="col-md-10">
            <input type="text" className="form-control" value={characterName} onChange={handleChange}/>
            </div>
            <div className="col-md-1">
                <button className="btn search-form__button" onClick={searchCharacterForName} type="button">Search</button>
            </div>
            <div className="col-md-1">
                <button className="btn search-form__button" onClick={clearSearchCharacter} type="button">Clear</button>
            </div>
        </div>
    </section>
  );
}

const mapStateToProps = state => ({
  searchCharacter: state.searchCharacter
});

const mapDispatchToProps = dispatch =>{
  return {
    searchCharacter: (characterName) => dispatch(searchCharacter(characterName)),
    fetchCharacters: (page, name) => dispatch(fetchCharacters(page, name))
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);