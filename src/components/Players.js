import React from 'react';
import PropTypes from 'prop-types';
import { updatePlayer, deletePlayer } from '../api/data/playerData';

export default function Players({ players, setPlayers, setEditItem }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deletePlayer(players.firebaseKey).then(setPlayers);
    } else {
      updatePlayer().then(setPlayers);
    }
  };
  return (
    <div className="card">
      {/* <img src={players.imageUrl} className="card-img-top" alt="player" /> */}
      <div className="card-body">
        <h5 className="card-title">{players.name}</h5>
        <p className="card-text">Position: {players.position}</p>
        <button
          onClick={() => setEditItem(players)}
          className="btn btn-info"
          type="button"
        >
          Edit
        </button>
        <button
          onClick={() => handleClick('delete')}
          className="btn btn-danger"
          type="button"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

Players.propTypes = {
  players: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    imageUrl: PropTypes.string,
    position: PropTypes.string,
  }).isRequired,
  setEditItem: PropTypes.func.isRequired,
  setPlayers: PropTypes.func.isRequired,
};
