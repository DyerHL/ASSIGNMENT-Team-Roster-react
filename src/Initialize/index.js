import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/auth';
import SignIn from '../views/SignIn';

function Initialize() {
  // const [player, setPlayer] = useState([]);
  // const [editItem, setEditItem] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        setUser(true);
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
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

export default Initialize;
