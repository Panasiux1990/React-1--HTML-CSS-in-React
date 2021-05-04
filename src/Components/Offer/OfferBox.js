import React from 'react';


function OfferBox({title, isNew, key}) {
    return (
      <div className="uslugi-box">
          <div className={`${isNew ? "uslugi-box-dot" : ""} `}></div>
          <div className="uslugi-box-content">
          <h2>{title}</h2>
          {isNew && <span className="newOffer">(Nowość!)</span>}
          </div>
      </div>
    );
  }
  export default OfferBox;