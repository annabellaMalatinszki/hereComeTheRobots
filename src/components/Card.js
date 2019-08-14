import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className="tc dib br2 pa3 ma2 bg-light-green grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}`} alt="photo" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
