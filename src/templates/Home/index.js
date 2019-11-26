import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCharacters } from '../../actions/characters'
import { Navbar, CharacterCard, SearchForm, Pagination } from '../../components'
import './style.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characterName: ''
    };
  }

  componentDidMount() {
    this.props.fetchCharacters();
  }


  handleChange = (event) => {
    this.setState({
      characterName: event.target.value
    });
  }

  render() {
    let characters = this.props.characters != null ? this.props.characters.results : [];
    let selectedCharacter = this.props.character != null ? this.props.character.results : null;
    return (
      <div>
        <Navbar />
        <SearchForm />
        <Pagination />
        <section className="container characters__container">
          <div className="row">
            {selectedCharacter != null ?
              selectedCharacter.map(character => (
                <div className="col-md-4" key={character.id}>
                  <CharacterCard character={character} />
                </div>)) :
              characters.map(character => (
                <div className="col-md-4" key={character.id}>
                  <CharacterCard character={character} />
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

export default connect(mapStateToProps, { fetchCharacters })(Home);