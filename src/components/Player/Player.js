import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEuroSign } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    const { name, salary, img } = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="players-container">
            <div className="player-container">
                <div className="player">
                    <p><img src={img} alt={name} /></p>
                    <h3>{name}</h3>
                    <h4>Market Value: <span className="salary"><FontAwesomeIcon icon={faEuroSign} /> {salary} m</span></h4>
                    <button className="main-button" onClick={()=>handleAddPlayer(props.player)}>Select for your team <span className="plus"><FontAwesomeIcon icon={faPlus} /></span></button>
                </div>
            </div>
        </div>
    );
};

export default Player;