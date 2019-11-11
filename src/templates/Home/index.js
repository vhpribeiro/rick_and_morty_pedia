import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCharacter } from '../../actions/characters'
import { Navbar, CharacterCard } from '../../components'

class Home extends Component {
    
    componentDidMount(){
        this.props.fetchCharacter();
    }

    render() {
        let characters = this.props.characters != null ? this.props.characters.results : [];
        return (
            <div>
                <Navbar/>
                <section className="container">
                    <div className="row">
                        {characters.map(character => (
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
    characters: state.characters
});

export default connect(mapStateToProps, {fetchCharacter})(Home);