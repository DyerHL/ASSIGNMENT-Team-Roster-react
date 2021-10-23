import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { updatePlayer, deletePlayer, getPlayers } from '../api/data/playerData';

export default function Players({
  user, player, setPlayers, setEditItem,
}) {
  const history = useHistory();
  const handleClick = (method) => {
    if (method === 'delete') {
      deletePlayer(player.firebaseKey).then(() => getPlayers(user.uid).then(setPlayers));
    } else {
      updatePlayer().then(setPlayers);
    }
  };
  return (
    <div className="card">
      <img src={player.imageUrl} className="card-img-top" alt="player" />
      <div className="card-body">
        <h5 className="card-title">{player.name}</h5>
        <p className="card-text">Position: {player.position}</p>
        <button
          onClick={() => { setEditItem(player); history.push('/addPlayer'); }}
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
  player: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    imageUrl: PropTypes.string,
    position: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    uid: PropTypes.string,
  }),
  setEditItem: PropTypes.func.isRequired,
  setPlayers: PropTypes.func.isRequired,
};

Players.defaultProps = {
  user: {},
};
