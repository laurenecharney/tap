import React from "react";
import taplogowide from './taplogo-wide.png';
import signup from './SignUp.jpeg';

function About() {
  return (
    <div className="about">
      <div className="container" style={{ maxWidth: "100%" }}>
        <div className="row align-items-center" style={{ paddingTop: 40, paddingBottom: 40}}>
          <div className="col-lg-6 offset-1" style={{ display: 'flex' }}>
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              width='90%'
              src={taplogowide}
              alt="TAP Logo"
            />
          </div>
          <div className="col-lg-4">
            <h1 className="font-weight-bold">About Us</h1>
            <h4 className="font-weight-bold">Who We Are.</h4>
            <p>
              TAP is a collaboration between the Fourteenth Avenue Baptist Church and Vanderbilt University.
              Mentors and mentees meet three times a week (Tuesday, Wednesday, and Thursday) for 1 hour.
              At the moment, TAP is happening virtually via Zoom.
            </p>
          </div>
        </div>

        <div className='row align-items-center' style={{backgroundColor: "#53bac1", paddingBottom: 20, paddingTop: 20 }}>
          <div className="col-lg-6 offset-1">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              width='90%'
              align="center"
              src={signup}
              alt="TAP Logo"
            />
          </div>
          <div className="col-lg-4">
            <h1 className="font-weight-bold" style={{color: "white"}}>About Our Mentors</h1>
            <p style={{color: "white"}}>
              TAP is a collaboration between the Fourteenth Avenue Baptist Church and Vanderbilt University.
              Mentors and mentees meet three times a week (Tuesday, Wednesday, and Thursday) for 1 hour.
              At the moment, TAP is happening virtually via Zoom.
            </p>
          </div>
        </div>

        <div className='row align-items-center' style={{backgroundColor: "#53bac1", paddingBottom: 20, paddingTop: 20 }}>
          <div className="col-lg-6 offset-1" style={{ display: 'flex' }}>
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              width='90%'
              src={taplogowide}
              alt="TAP Logo"
            />
          </div>
          <div className="col-lg-4">
            <h1 className="font-weight-bold" style={{color: "white"}}>About Our Mentees</h1>
            <p style={{color: "white"}}>
              TAP is a collaboration between the Fourteenth Avenue Baptist Church and Vanderbilt University.
              Mentors and mentees meet three times a week (Tuesday, Wednesday, and Thursday) for 1 hour.
              At the moment, TAP is happening virtually via Zoom.
            </p>
          </div>
        </div>

        <div className='row align-items-center' style={{backgroundColor: "#53bac1", paddingBottom: 20, paddingTop: 20 }}>
          <div className="col-lg-6 offset-1" style={{ display: 'flex' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2581.116397129394!2d-86.81960276609556!3d36.18012551156632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864672bcc980921%3A0xb49711898238b74c!2sFourteenth%20Avenue%20Baptist%20Church!5e0!3m2!1sen!2sus!4v1635300552776!5m2!1sen!2sus"
              width="90%" height="450" allowFullScreen="" loading="lazy"></iframe>
          </div>
          <div className="col-lg-4">
            <h1 className="font-weight-bold" style={{color: "white"}}>About The Church</h1>
            <h3 className="font-weight-light" style={{color: "white"}}>14th Ave Missionary Baptist Church</h3>
            <p style={{color: "white"}}>
              Led by Rev. Dr. Frank Gordon
              <br></br>
              Address: 2501 Buchanan St
              <br></br>
              Nashville, TN 37208
            </p>
          </div>
        </div>

        <div className='row align-items-center' style={{ paddingBottom: 20, paddingTop: 20 }}>
            <h1 className="font-weight-bold" style={{textAlign: "center"}}>Meet The Leadership Team</h1>
        </div>

        <div className="row" style={{ paddingTop: 25, paddingBottom: 25 }}>
          <div className="col-lg-4" style={{textAlign: "center"}}>
            <h3 className="font-weight-bold">Caroline Riedl</h3>
            <h5>
              <b>Role:</b> Program Director
              <br></br>
              <b>Email:</b> caroline.c.riedl@vanderbilt.edu
            </h5>
          </div>
          <div className="col-lg-4" style={{textAlign: "center"}}>
            <h3 className="font-weight-bold">Sam Suazo</h3>
            <h5>
              <b>Role:</b> Enrichment Coordinator
              <br></br>
              <b>Email:</b> samantha.r.suazo@vanderbilt.edu
            </h5>
          </div>
          <div className="col-lg-4" style={{textAlign: "center"}}>
            <h3 className="font-weight-bold">Faith Kwentua</h3>
            <h5>
              <b>Role:</b> Enrichment Coordinator
              <br></br>
              <b>Email:</b> faith.kwentua@vanderbilt.edu
            </h5>
          </div>
        </div>

        <div className='row'>
          <div className="col-lg-8 offset-2" style={{ paddingTop: 25, paddingBottom: 25 }}>
            <h2 align='center' className="font-weight-semi-bold">Leadership Teams</h2>
            <div className="row" style={{ paddingBottom: 20, paddingTop: 20 }}>
              <div className="col-6" style={{ textAlign: "center" }}>
                <h3 className="font-weight-semi-bold">Zoom Team</h3>
                <h5>
                  Jessica Davis, Grace Pulliam, Quinn Muscatel
                </h5>
              </div>
              <div className="col-6" style={{ textAlign: "center" }}>
                <h3 className="font-weight-semi-bold">Family Team</h3>
                <h5>
                  Soretti Donka, Emily Redd, Elizabeth Baum
                </h5>
              </div>
            </div>

            <div className="row" style={{ paddingBottom: 20, paddingTop: 20 }}>
              <div className="col-6" style={{ textAlign: "center" }}>
                <h3 className="font-weight-semi-bold">Activities Team</h3>
                <h5>
                  Matthew McKenna, Mark Wilkins, Victoria King
                </h5>
              </div>
              <div className="col-6" style={{ textAlign: "center" }}>
                <h3 className="font-weight-semi-bold">Communications Team</h3>
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