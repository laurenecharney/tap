import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container" style={{maxWidth: "100%"}}>

        <div class="row align-items-center" style={{backgroundColor: "#519dd9", paddingTop: 40, paddingBottom: 40, height: "100%"}}>
          <div class="col-lg-5 offset-2">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-bold" style={{color: "white"}}>Contact Us</h1>
            <h5 style={{paddingTop: 10, paddingBottom: 10, color: "white"}}>
              <b>Email:</b> <a href="mailto:tapintoyoursuccess@gmail.com" style={{color: "white"}}>tapintoyoursuccess@gmail.com</a>
            </h5>
            <h5 style={{paddingTop: 10, paddingBottom: 10, color: "white"}}>
              <b>Instagram:</b> <a href="https://www.instagram.com/tapnashville/" style={{color: "white"}}>@tapnashville</a>
            </h5>
            <h5 style={{paddingTop: 10, paddingBottom: 10, color: "white"}}>
              <b>Facebook:</b> <a href="https://www.facebook.com/vanderbiltTAP/" style={{color: "white"}}>The Afterschool Program</a>
            </h5>
            <h5 style={{paddingTop: 10, paddingBottom: 10, color: "white"}}>
              <b>Faculty Advisor:</b> Ms. Tam
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;