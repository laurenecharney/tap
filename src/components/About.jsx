import React from "react";
import taplogowide from './taplogo-wide.png';

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-6 offset-1" style={{ display: 'flex' }}>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              width='600'
              src={taplogowide}
              alt="TAP Logo"
            />
          </div>
          <div class="col-lg-4">
            <h1 class="font-weight-bold">About Us</h1>
            <h4 class="font-weight-bold">Who We Are.</h4>
            <p>
              TAP is a collaboration between the Fourteenth Avenue Baptist Church and Vanderbilt University.
              Mentors and mentees meet three times a week (Tuesday, Wednesday, and Thursday) for 1 hour.
              At the moment, TAP is happening virtually via Zoom.
            </p>
          </div>
        </div>

        <div class='row align-items-center' style={{paddingBottom: 20, paddingTop: 20}}>
          <div class="col-lg-6 offset-1" style={{ display: 'flex' }}>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              width='600'
              src={taplogowide}
              alt="TAP Logo"
            />
          </div>
          <div class="col-lg-4">
            <h1 class="font-weight-bold">About Our Mentors</h1>
            <p>
              TAP is a collaboration between the Fourteenth Avenue Baptist Church and Vanderbilt University.
              Mentors and mentees meet three times a week (Tuesday, Wednesday, and Thursday) for 1 hour.
              At the moment, TAP is happening virtually via Zoom.
            </p>
          </div>
        </div>

        <div class='row align-items-center' style={{paddingBottom: 20, paddingTop: 20}}>
          <div class="col-lg-6 offset-1" style={{ display: 'flex' }}>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              width='600'
              src={taplogowide}
              alt="TAP Logo"
            />
          </div>
          <div class="col-lg-4">
            <h1 class="font-weight-bold">About Our Mentees</h1>
            <p>
              TAP is a collaboration between the Fourteenth Avenue Baptist Church and Vanderbilt University.
              Mentors and mentees meet three times a week (Tuesday, Wednesday, and Thursday) for 1 hour.
              At the moment, TAP is happening virtually via Zoom.
            </p>
          </div>
        </div>

        <div class='row align-items-center' style={{paddingBottom: 20, paddingTop: 20}}>
          <div class="col-lg-6 offset-1" style={{ display: 'flex' }}>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              width='600'
              src={taplogowide}
              alt="TAP Logo"
            />
          </div>
          <div class="col-lg-4">
            <h1 class="font-weight-bold">About The Church</h1>
            <h3 class="font-weight-light">14th Ave Missionary Baptist Church</h3>
            <p>
              Led by Rev. Dr. Frank Gordon
              <br></br>
              Address: 2501 Buchanan St
              <br></br>
              Nashville, TN 37208
            </p>
          </div>
        </div>

        {/* <div class='row align-items-center' style={{paddingBottom: 20, paddingTop: 20}}> */}
          <div class='row align-items-center' style={{paddingBottom: 20, paddingTop: 20}}>
            <div class="col-lg-6 offset-1" style={{ display: 'flex' }}>
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                width='600'
                src={taplogowide}
                alt="TAP Logo"
              />
            </div>
            <div class="col-lg-4">
              <h1 class="font-weight-bold">Meet The Leadership Team</h1>
            </div>
          </div>

          <div class="row" style={{ paddingTop: 25, paddingBottom: 25 }}>
            <div class="col-lg-3 offset-1">
              <h3 class="font-weight-bold">Caroline Riedl</h3>
              <h5>
                <b>Role:</b> Program Director
                <br></br>
                <b>Email:</b> caroline.c.riedl@vanderbilt.edu
              </h5>
            </div>
            <div class="col-lg-3 offset-1">
              <h3 class="font-weight-bold">Sam Suazo</h3>
              <h5>
                <b>Role:</b> Enrichment Coordinator
                <br></br>
                <b>Email:</b> samantha.r.suazo@vanderbilt.edu
              </h5>
            </div>
            <div class="col-lg-3 offset-1">
              <h3 class="font-weight-bold">Faith Kwentua</h3>
              <h5>
                <b>Role:</b> Enrichment Coordinator
                <br></br>
                <b>Email:</b> faith.kwentua@vanderbilt.edu
              </h5>
            </div>
          </div>

        {/* </div> */}

        <div class='row'>
          <div class="col-lg-8 offset-2" style={{ paddingTop: 25, paddingBottom: 25 }}>
            <h2 align='center' class="font-weight-semi-bold">Leadership Teams</h2>
            <div class="row" style={{paddingBottom: 20, paddingTop: 20}}>
              <div class="col-6" style={{ textAlign: "center" }}>
                <h3 class="font-weight-semi-bold">Zoom Team</h3>
                <h5>
                  Jessica Davis, Grace Pulliam, Quinn Muscatel
                </h5>
              </div>
              <div class="col-6" style={{ textAlign: "center" }}>
                <h3 class="font-weight-semi-bold">Family Team</h3>
                <h5>
                  Soretti Donka, Emily Redd, Elizabeth Baum
                </h5>
              </div>
            </div>

            <div class="row" style={{paddingBottom: 20, paddingTop: 20}}>
              <div class="col-6" style={{ textAlign: "center" }}>
                <h3 class="font-weight-semi-bold">Activities Team</h3>
                <h5>
                  Matthew McKenna, Mark Wilkins, Victoria King
                </h5>
              </div>
              <div class="col-6" style={{ textAlign: "center" }}>
                <h3 class="font-weight-semi-bold">Communications Team</h3>
                <h5>
                  Madi Sims, Jennifer Fish
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: 50 }}>
          <p>.</p>
        </div>

      </div>
    </div >
  );
}

export default About;