import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <p>
              Email: <a href="mailto:tapintoyoursuccess@gmail.com">tapintoyoursuccess@gmail.com</a>
            </p>
            <p>
              Instagram: <a href="https://www.instagram.com/tapnashville/">@tapnashville</a>
            </p>
            <p>
              Facebook: <a href="https://www.facebook.com/vanderbiltTAP/">The Afterschool Program</a>
            </p>
            <p>
            Faculty Advisor: Ms. Tam 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;