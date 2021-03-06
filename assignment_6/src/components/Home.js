import React from "react";

import "./Home.css";

// handles Home
function Home() {
    return (
        <main>
            <div className="banner">
                <h1>Fluff Stuff</h1>
            </div>
            <div className="row">
                <div className="col-5 promo-left promo-top">SALE: 60% off Cushions</div>
                <div className="col-5 promo-right promo-top">The coziest you can get.</div>
            </div>
            <div className="row">
                <div className="col-5 promo-left promo-bottom">Home and comfort.</div>
                <div className="col-5 promo-right promo-bottom">SALE: 20% off Sheets</div>
            </div>
        </main>
    )
}

export default Home