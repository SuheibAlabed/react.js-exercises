import React, { Component } from "react";
import Space from "../Image/space.jpg";
import UploadImg from "./UploadImg";
import "./Cards.scss";
import { cardDescription } from "./DataSt";

const Cards = () => {
  const renderCard = (card, index) => {
    return (
      <div className="Card" key={index}>
        {/* Cover picture */}
        <div className="Cover">
          <UploadImg />
        </div>
        {/* information About person */}
        <div className="info">
          <h1>{card.Name}</h1>
          <p>{card.address}</p>
          <h2>{card.Work}</h2>
          <p>{card.Description}</p>
          <div className="SocialMedia">
            <div className="Media">
              <a href={card.instagram}>
                <i class="fa fa-instagram fa-2x"></i>
              </a>
            </div>
            <div className="Media">
              <a href={card.twitter}>
                <i class="fa fa-twitter fa-2x"></i>
              </a>
            </div>
            <div className="Media">
              <a href={card.facebook}>
                <i class="fa fa-facebook fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    // Start Card
    <div className="Container">{cardDescription.map(renderCard)}</div>
    //End Card
  );
};

export default Cards;
