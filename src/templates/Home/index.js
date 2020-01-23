import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCharacters } from '../../actions/characters'
import { CharacterCard, SearchForm, Pagination } from '../../components'
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

  render() {
    let characters = this.props.characters != null ? this.props.characters.results : [];
    return (
      <div>
        <SearchForm />
        <Pagination />
        <section className="container characters__container">
          <div className="row">
            {characters.map(character => (
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
  characters: state.characters
});

const mapDispatchToProps = dispatch =>{
  return {
    fetchCharacters: (page, name) => dispatch(fetchCharacters(page, name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);