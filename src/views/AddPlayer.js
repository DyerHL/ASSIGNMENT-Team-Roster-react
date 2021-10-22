import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react/cjs/react.development';
import PropTypes from 'prop-types';
import { createPlayer, updatePlayer } from '../api/data/playerData';

const initialState = {
  name: '',
  imageUrl: '',
  position: '',
  uid: '',
  firebaseKey: '',
};

export default function AddPlayer({ obj, setEditItem, setPlayers }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        name: obj.name,
        firebaseKey: obj.firebaseKey,
        imageUrl: obj.imageUrl,
        position: obj.position,
      });
    }
  }, [obj]);

  const resetForm = () => {
    setFormInput({ ...initialState });
    setEditItem({});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updatePlayer(formInput).then((player) => {
        setPlayers(player);
        resetForm();
      });
    } else {
      createPlayer(formInput).then((player) => {
        setPlayers(player);
        resetForm();
        history.push('/');
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">
          Add a Player:
          <input
            className="form-control form-control-lg me-3"
            name="name"
            id="name"
            value={formInput.name}
            onChange={handleChange}
            placeholder="Player's Name"
            required
          />
        </label>
        <label htmlFor="position">
          <input
            className="form-control form-control-lg me-4"
            name="position"
            id="position"
            value={formInput.position}
            onChange={handleChange}
            placeholder="What position do they play?"
            required
          />
        </label>
        <label htmlFor="imageUrl">
          <input
            className="form-control form-control-lg me-4"
            name="imageUrl"
            id="imageUrl"
            value={formInput.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
            required
          />
        </label>
        <button className="btn btn-success" type="submit">
          {obj.firebaseKey ? 'Update' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

AddPlayer.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    imageUrl: PropTypes.string,
    position: PropTypes.string,
  }).isRequired,
  setEditItem: PropTypes.func.isRequired,
  setPlayers: PropTypes.func.isRequired,
};
