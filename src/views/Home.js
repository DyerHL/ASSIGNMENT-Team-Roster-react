import React from 'react';
import PropTypes from 'prop-types';
import Players from '../components/Players';

export default function Home({
  players, setPlayers, setEditItem, user,
}) {
  return (
    <div>
      <div className="mt-5">
        {players.map((player) => (
          <Players
            key={player.firebaseKey}
            players={players}
            setPlayers={setPlayers}
            setEditItem={setEditItem}
            player={player}
            user={user}
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
  user: PropTypes.shape({
    name: PropTypes.string,
    uid: PropTypes.string,
  }),
};

Home.defaultProps = {
  user: {},
};
