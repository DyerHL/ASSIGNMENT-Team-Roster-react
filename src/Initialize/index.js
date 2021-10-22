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
          user: authed.email.split('@')[0],
        };
        setUser(userInfoObj);
        getPlayers(authed).then(setUser);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <Navigation />
          <h1>Team Roster</h1>
          <Routes setEditItem={setEditItem} editItem={editItem} setPlayers={setPlayers} players={players} />
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default Initialize;
