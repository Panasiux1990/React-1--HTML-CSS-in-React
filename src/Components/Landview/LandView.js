import React from 'react';
import './LandView.css';

function LandView() {
  return (
    <section className="tlo-las">
        <div className="tlo-las-cien">
            <div className="container">
                <div className="container-text text-white">
                    <h1>
                        Nasza firma oferuje najwyższej jakości produkty
                    </h1>
                    <h2>Nie wierz nam na słowo - sprawdź</h2>
                    <a className="btn-oferta text-white" href="#offers">oferta</a>
                </div>
            </div>
        </div>
    </section>
  );
}
export default LandView;