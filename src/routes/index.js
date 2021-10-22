import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddPlayer from '../views/AddPlayer';
import Home from '../views/Home';

export default function Routes({
  players,
  setPlayers,
  setEditItem,
}) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home players={players} setPlayers={setPlayers} setEditItem={setEditItem} />} />
        <Route exact path="/addPlayer" component={() => <AddPlayer players={players} setPlayers={setPlayers} setEditItem={setEditItem} />} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayers: PropTypes.func.isRequired,
  setEditItem: PropTypes.func.isRequired,
};
