import React from "react";
import mentees from './Mentees.jpeg';

function Mentees() {
  return (
    <div className="mentees">
      <div class="container" style={{ maxWidth: "100%" }}>
        <div class="row align-items-center" style={{ paddingTop: 35, paddingBottom: 35, backgroundColor: "#519dd9" }}>
          <div class="col-lg-6 offset-1">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              height="300"
              src={mentees}
              alt=""
            />
          </div>
          <div class="col-lg-4">
            <h1 class="font-weight-light" style={{color: "white"}}>Our Mentees</h1>
            <h5 style={{color: "white"}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </h5>
          </div>
        </div>

        <div class="row align-items-center my-5">
          <div class="col-lg-4 offset-2" style={{ alignItems: "center" }}>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/300x300"
              alt=""
            />
          </div>
          <div class="col-lg-4">
            <h2>How Our Mentors Can Help</h2>
            <p>TAP mentors aim to provide academic and social enrichment to 
              the mentees of the program. Mentors will work with mentees each 
              week on homework assignments, enrichment activities, and other 
              educational tasks. 
            </p>
          </div>
        </div>

        <div class="row align-items-center my-5">
          <div class="col-lg-4 offset-2">
            <h2>Mentorship Structures</h2>
            <p>Mentors work one-on-one with their student mentees to complete 
              their homework and other educational tasks. Mentors and mentees 
              can also bond over non-academic interests they share. TAP meets 
              3 days a week (Tuesday, Wednesday, and Thursday) for one hour.</p>
          </div>
          <div class="col-lg-4" style={{ alignItems: "center" }}>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/300x300"
              alt=""
            />
          </div>
        </div>

        <div class="row align-items-center my-5">
          <div class="col-lg-4 offset-2" style={{ alignItems: "center" }}>
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/300x300"
              alt=""
            />
          </div>
          <div class="col-lg-4">
            <h2>Mentee Testimonies</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.</p>
          </div>
        </div>

        <div class="row align-items-center" style={{ paddingTop: 35, paddingBottom: 35, backgroundColor: "#f2f2f2" }}>
          <div class="col-lg-4 offset-2">
            <h1 class="font-weight-bold" style={{ textAlign: "center" }}>Join Us As a</h1>
            <h1 class="font-weight-bold" style={{ textAlign: "center" }}>TAP Mentee</h1>
          </div>
          <div class="col-lg-4 ">
            <div class="row">
              <h3 class="font-weight-semi-bold">Application Process</h3>
              <p>
                Fill out the short Google Form embedded below, and we will contact 
                you with next steps to join the program!
              </p>
            </div>
            <div class="row">
              <h3 class="font-weight-semi-bold">Why TAP</h3>
              <p>
                The Afterschool Program fosters mentorships that improve students' 
                academic and personal lives in the long term.
              </p>
            </div>
            <div class="row">
              <h3 class="font-weight-semi-bold">Join Our Email Chain</h3>
              <p>
                Join our email chain to stay up-to-date with all TAP programming 
                and events. 
              </p>
            </div>
          </div>
        </div>

        {/* Mentee application / Google Form */}
        <div class="row align-items-center" style={{ paddingTop: 35, paddingBottom: 35 }}>
          <div class="col-lg-12" style={{ textAlign: "center" }}>
            <h3 class="font-weight-bold" style={{ textAlign: "center", paddingBottom: 25 }}>TAP Mentee Application</h3>
          </div>
          <div class="col-lg-8 offset-2" style={{ alignItems: "center" }}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdYpOJjpq_5FJNwkfNmSmp8WBspogrEHoGjyVmemv3fqARtHA/viewform?embedded=true"
              width="100%" height="975" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            <p style={{textAlign: "center"}}>
              If the form does not load, please contact us at <a href="mailto:tapintoyoursuccess@gmail.com" style={{color: "black"}}>tapintoyoursuccess@gmail.com</a>
              <br></br>
              Sorry for the inconvenience!
            </p>
          </div>
        </div>

        <div style={{ padding: 50 }}>
          <p>.</p>
        </div>
      </div>
    </div>
  );
}

export default Mentees;