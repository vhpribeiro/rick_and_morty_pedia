import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Character extends Component {
    constructor(props){
        super(props);
    }

    getTheListOfEpisodes(episodes) {
        let listOfEpisodes = [];
        episodes.forEach(episode => {
            let urlFromTheEpisodeSplit = episode.split('/');
            let numberOfTheEpisode = urlFromTheEpisodeSplit.slice(-1);
            listOfEpisodes.push(numberOfTheEpisode);
        });
        return listOfEpisodes.join(', ');
    }

    render () {
        let character = this.props.character != null ? this.props.character : {};
        let origin = !!character.origin ? character.origin.name : '';
        let episodes = !!character.episode ? character.episode : [];
        let episodesThatTheCharacterAppears = this.getTheListOfEpisodes(episodes)
        return (
            <div className="container">
                <h3>Description</h3>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <span className="font-weight-bold">Name:</span> {character.name}
                            </li>
                            <li className="list-group-item">
                                <span className="font-weight-bold">Status:</span> {character.status}
                            </li>
                            <li className="list-group-item">
                                <span className="font-weight-bold">Species:</span> {character.species}
                            </li>
                            <li className="list-group-item">
                                <span className="font-weight-bold">Gender:</span> {character.gender}
                            </li>
                            <li className="list-group-item">
                                <span className="font-weight-bold">Origin:</span> {origin}
                            </li>
                            <li className="list-group-item">
                                <span className="font-weight-bold">Episode(s):</span> {episodesThatTheCharacterAppears}
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                    <img src={character.image} className="ml-3" alt={character.name}/> 
                    </div>
                </div>
                <Link className="btn btn-outline-primary" to="/">Go back!</Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  character: state.character
});

export default connect(mapStateToProps, {})(Character);