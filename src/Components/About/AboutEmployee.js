import React from 'react';

function AboutEmployee({name, desc, img}) {
  return (
        <div className="about-employee">
            <div style={{backgroundImage: `url(${img})`}} className="about-zdj"></div>
            <div className="about-opis">
                <h2>{name}</h2>
                <p>{desc}</p>
            </div>
        </div>
  );
}
export default AboutEmployee;
