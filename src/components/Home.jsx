import React from "react";
import taplogo from './taplogo.png';

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={taplogo}
              alt="TAP Logo"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">The Afterschool Program</h1>
            <p>
              The Afterschool Program, or TAP for short, is a non-profit program whose mission 
              is to break the poverty cycle and close the achievement gap in children. Since 2011,
              TAP has paired college student volunteers with Nashville students 
              to focus on literacy development and social enrichment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;