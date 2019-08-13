import React from 'react';

const Card = ({ name, email }) => {
  return (
    <div>
      <img src="https://robohash.org/test" alt="photo" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
