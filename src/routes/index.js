import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddPlayer from '../views/AddPlayer';
import Home from '../views/Home';

export default function Routes({
  players,
  setPlayers,
  setEditItem,
  obj,
  user,
}) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home players={players} setPlayers={setPlayers} setEditItem={setEditItem} obj={obj} />} />
        <Route exact path="/addPlayer" component={() => <AddPlayer user={user} players={players} setPlayers={setPlayers} setEditItem={setEditItem} obj={obj} />} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  obj: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    imageUrl: PropTypes.string,
    position: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    uid: PropTypes.string,
  }),
  setPlayers: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};

Routes.defaultProps = {
  user: null,
};
