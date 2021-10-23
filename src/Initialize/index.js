import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/auth';
import SignIn from '../views/SignIn';
import Navigation from '../components/Navigation';
import Routes from '../routes';
import { getPlayers } from '../api/data/playerData';

function Initialize() {
  const [players, setPlayers] = useState([]);
  const [editItem, setEditItem] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
        };
        setUser(userInfoObj);
        getPlayers(authed.uid).then(setPlayers);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>Team Roster</h1>
          <Navigation />
          <Routes setEditItem={setEditItem} obj={editItem} setPlayers={setPlayers} players={players} user={user} />
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default Initialize;
