import React from "react";

const HeroCard = ({ name, seating, manual, rentpd, imageUrl }) => {
  return (
    <div className="herocard">
      <div className="hero-img">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="hero-details">
        <h4 className="name">{name}</h4>
        <div className="details">
          <h4 className="seating">{seating}</h4>
          <h4 className="manual">{manual}</h4>
        </div>
        <h4 className="rentpd">{rentpd}</h4>
      </div>
    </div>
  );
};

export default HeroCard;
