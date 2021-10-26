import React from "react";
import taplogo from './taplogo.png';

function About() {
  return (
    <div className="about">
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
            <h1 class="font-weight-light">About</h1>
            <p>
            TAP is a collaboration between the Fourteenth Avenue Baptist Church and Vanderbilt Unviersity. 
            Meet the people who help children tap into their success!
            </p>
          </div>
          <div class="col-lg-4">
            <h2 class="font-weight-light">Exec Board</h2>
            <h3 class="font-weight-light">Caroline Riedl</h3>
            <p>
              Role: Program Director
            </p>
            <p>
              Email: caroline.c.riedl@vanderbilt.edu
            </p>
            <h3 class="font-weight-light">Sam Suazo</h3>
            <p>
              Role: Enrichment Coordinator
            </p>
            <p>
              Email: samantha.r.suazo@vanderbilt.edu
            </p>
            <h3 class="font-weight-light">Faith Kwentua</h3>
            <p>
              Role: Enrichment Coordinator
            </p>
            <p>
              Email: faith.kwentua@vanderbilt.edu
            </p>
          </div>
          <div class="col-lg-4">
            <h2 class="font-weight-light">The Church</h2>
            <h3 class="font-weight-light">14th Ave Missionary Baptist Church</h3>
            <p>
              Led by Rev. Dr. Frank Gordon
            </p>
            <p>
              Address: 2501 Buchanan St
            </p>
            <p>
              Nashville, TN 37208
            </p>
          </div>
          <div class="col-lg-4">
            <h2 class="font-weight-light">Leadership Teams</h2>
            <h3 class="font-weight-light">Zoom Team</h3>
            <p>
              Jessica Davis, Grace Pulliam, Quinn Muscatel
            </p>
            <h3 class="font-weight-light">Family Team</h3>
            <p>
              Soretti Donka, Emily Redd, Elizabeth Baum
            </p>
            <h3 class="font-weight-light">Activities Team</h3>
            <p>
              Matthew McKenna, Mark Wilkins, Victoria King
            </p>
            <h3 class="font-weight-light">Communication</h3>
            <p>
              Madi Sims, Jennifer Fish
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;