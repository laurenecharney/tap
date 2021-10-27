import React from "react";
import taplogo from './taplogo.png';

function Home() {
  return (
    <div className="home">
      <div class="container" style={{ maxWidth: "100%" }}>
        <div class="row align-items-center" style={{ backgroundColor: "#519dd9", paddingBottom: 40, paddingTop: 40}}>
          <div class="col-lg-4 offset-2">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={taplogo}
              alt="TAP Logo"
            />
          </div>
          <div class="col-lg-4">
            <h1 class="font-weight-light" style={{ color: "white"}}>The Afterschool Program</h1>
            <p style={{ color: "white"}}>
              The Afterschool Program, or TAP for short, is a non-profit program whose mission
              is to break the poverty cycle and close the achievement gap in children. Since 2011,
              TAP has paired college student volunteers with Nashville students
              to focus on literacy development and social enrichment, allowing children to tap
              into their success!
            </p>
          </div>
        </div>

        <div class="row align-items-center " style={{ paddingTop: 40, paddingBottom: 40 }}>
          <div class="col-lg-4 offset-2">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={taplogo}
              alt="TAP Logo"
            />
          </div>
          <div class="col-lg-4">
            <h3 class="font-weight-bold">Our Mission</h3>
            <p>
              Founded in 2011, TAP is a collaboration between
              Fourteenth Avenue Baptist Church and Vanderbilt
              University focusing on literacy development. The
              organization continues to be entirely student-led.
            </p>
            <p>Out goal is to help close the achievement gap by
              providing academic and social enrichment for the
              youth that we serve.</p>
          </div>
        </div>

        <div style={{ padding: 40 }}>
          <p>.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;