import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCharacters } from '../../actions/characters'
import { fetchCharacter, clearCharacter } from '../../actions/character'
import { Navbar, CharacterCard } from '../../components'
import './style.css'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            characterName: ''
        };
    }

    componentDidMount(){
        this.props.fetchCharacters();
    }

    searchCharacter = (event) => {
        event.preventDefault();
        this.props.fetchCharacter(this.state.characterName);
    }

    clearCharacter = (event) => {
        event.preventDefault();
        this.props.clearCharacter();
        this.setState({
            characterName: ''
        })
    }

    handleChange = (event) =>{
        this.setState({
            characterName: event.target.value
        });
    }

    render() {
        let characters = this.props.characters != null ? this.props.characters.results : [];
        let selectedCharacter = this.props.character != null ? this.props.character.results : null;
        return (
            <div>
                <Navbar/>
                <section className="container search-form__container">
                    <div className="form-row">
                        <div className="col-md-10">
                        <input type="text" className="form-control" value={this.state.characterName} onChange={this.handleChange}/>
                        </div>
                        <div className="col-md-1">
                            <button className="btn search-form__button" onClick={this.searchCharacter} type="button">Search</button>
                        </div>
                        <div className="col-md-1">
                            <button className="btn search-form__button" onClick={this.clearCharacter} type="button">Clear</button>
                        </div>
                    </div>
                </section>
                <section className="container characters__container">
                    <div className="row">
                        {selectedCharacter != null ?
                         selectedCharacter.map(character => (
                            <div className="col-md-4" key={character.id}>
                                <CharacterCard character={character}/>
                         </div>)) :
                          characters.map(character => (
                            <div className="col-md-4" key={character.id}>
                                <CharacterCard character={character}/>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    characters: state.characters,
    character: state.character
});

export default connect(mapStateToProps, {fetchCharacters, fetchCharacter, clearCharacter})(Home);