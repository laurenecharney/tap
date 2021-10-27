import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5 offset-2">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-bold">Contact Us</h1>
            <h5 style={{paddingTop: 10, paddingBottom: 10}}>
              <b>Email:</b> <a href="mailto:tapintoyoursuccess@gmail.com">tapintoyoursuccess@gmail.com</a>
            </h5>
            <h5 style={{paddingTop: 10, paddingBottom: 10}}>
              <b>Instagram:</b> <a href="https://www.instagram.com/tapnashville/">@tapnashville</a>
            </h5>
            <h5 style={{paddingTop: 10, paddingBottom: 10}}>
              <b>Facebook:</b> <a href="https://www.facebook.com/vanderbiltTAP/">The Afterschool Program</a>
            </h5>
            <h5 style={{paddingTop: 10, paddingBottom: 10}}>
              <b>Faculty Advisor:</b> Ms. Tam
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;