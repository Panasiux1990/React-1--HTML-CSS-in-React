import React from 'react';
import './Offer.css';
import OfferBox from './OfferBox.js';

const offers = [
    {
        id: 1,
        offerTitle: 'Krabby Patty',
        isNew: true
    },
    {
        id: 2,
        offerTitle: 'Bubble Bass',
        isNew: false
    },
    {
        id: 3,
        offerTitle: 'Krabby Supreme',
        isNew: false
    },
    {
        id: 4,
        offerTitle: 'Spongebob sundae',
        isNew: false
    },
    {
        id: 5,
        offerTitle: 'Barnacle Burger',
        isNew: true
    },
    {
        id: 6,
        offerTitle: 'Lazy Patty',
        isNew: false
    },
]

function Offer() {
    return (
      <section className="oferta text-white" id="offers">
          <div className="container">
              <h1>Czym zajmuje się nasza firma?</h1>
              <div className="uslugi">
                  {offers.map(offer => {
                      return <OfferBox title = {offer.offerTitle} isNew = {offer.isNew} key = {offer.key}/>
                  })}
                 
              </div>
          </div>
      </section>
    );
  }
  export default Offer;