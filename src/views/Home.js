import React from 'react';
import PropTypes from 'prop-types';
import Players from '../components/Players';

export default function Home({ players, setPlayers, setEditItem }) {
  return (
    <div>
      <div className="mt-5">
        {players.map((player) => (
          <Players
            key={player.firebaseKey}
            player={player}
            setPlayers={setPlayers}
            setEditItem={setEditItem}
          />
        ))}
      </div>
    </div>
  );
}

Home.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayers: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
