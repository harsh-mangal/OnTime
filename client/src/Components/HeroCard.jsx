import React from "react";

const HeroCard = () => {
  return (
    <div className="herocard">
      <div className="hero-img">
        <img
          src="https://cdn2.rcstatic.com/images/car_images/web/peugeot/5008_lrg.jpg"
          alt=""
        />
      </div>
      <div className="her-details">
        <h4 className="name">Peugeot 5008</h4>
        <h4 className="seating">7 seats</h4>
        <h4 className="manual">Manual</h4>
        <h4 className="rentpd">₹21,345.18</h4>
      </div>
    </div>
  );
};

export default HeroCard;
