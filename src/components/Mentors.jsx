import React from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import image from './MentorPhoto.jpg'

function Mentors() {
  return (
    <div className="mentors">
      <div class="container" style={{ maxWidth: "100%" }}>
        <div class="row align-items-center" style={{ paddingTop: 35, paddingBottom: 35, backgroundColor: "#db0038" }}>
          <div class="col-lg-4 offset-2" style={{ display: 'flex' }}>
            <img
              class="img-fluid rounded mb-4 mb-md-0"
              style={{
                resizeMode: 'contain'
              }}
              src={image}
              alt=""
            />
          </div>
          <div class="col-lg-4">
            <h1 class="font-weight-light" style={{ color: "white" }}>Our Mentors</h1>
            <h5 style={{ color: "white" }}>
              Our mentors are Vanderbilt students from all different backgrounds.
              The unqiue set of menotrs brings a diversity of thought and
              educational strengths to our program. Each mentor is pair with a
              student, and the mentor meets with their student at least once a
              week.
            </h5>
          </div>
        </div>

        {/* EMBEDDED GOOGLE CALENDAR */}
        <div class="row" style={{ paddingTop: 35, paddingBottom: 35 }}>
          <div class="col-lg-8 offset-2">
            <div style={{ textAlign: "center", paddingBottom: 25 }}>
              <h1 class="font-weight-bold">Upcoming Events </h1>
            </div>

            <iframe src="https://calendar.google.com/calendar/embed?src=c_bvg2cm616d6d56g935297rb1fc%40group.calendar.google.com&ctz=America%2FChicago"
              frameborder="0" width="100%" height="550" frameborder="0" scrolling="no"></iframe>
            {/* <div style={{display: 'flex'}}>
          <Calendar />
        </div> */}
            <p style={{textAlign: "center"}}>
              TAP usually meets from 4-5pm on Mondays, Tuesdays, and Wednesdays.
              <br></br>
              If the calendar does not load, please contact us at <a href="mailto:tapintoyoursuccess@gmail.com" style={{color: "black"}}>tapintoyoursuccess@gmail.com</a>
              <br></br>
              Sorry for the inconvenience!
            </p>
          </div>
        </div>

        {/* VIRTUAL ZOOM LINKS */}
        <div class="row align-items-center" style={{ paddingTop: 20, paddingBottom: 20, backgroundColor: "#f2f2f2" }}>
          <div class="col-lg-4 offset-2" style={{ textAlign: "center" }}>
            <h1 class="font-weight-bold">Join Your Virtual Zoom Session</h1>
          </div>

          <div class="col-lg-4" style={{ display: 'flex' }}>
            <div class="col-md-12">
              <div class="row" style={{ padding: 20 }}>
                <button style={{ background: "#519DD9", color: "#fff", borderRadius: 10, padding: 25, border: 0 }}>Monday</button>
              </div>
              <div class="row" style={{ padding: 20 }}>
                <button style={{ background: "#519DD9", color: "#fff", borderRadius: 10, padding: 25, border: 0 }}> Tuesday  </button>
              </div>
              <div class="row" style={{ padding: 20 }}>
                <button style={{ background: "#519DD9", color: "#fff", borderRadius: 10, padding: 25, border: 0 }}>Wednesday </button>
              </div>
            </div>
          </div>
        </div>

        {/* MEETING RESOURCE LINKS */}
        <div class="row align-items-center" style={{ paddingBottom: 50, paddingTop: 50, textAlign: "center" }}>
          <h2 class="font-weight-bold" style={{ paddingBottom: 30 }}>Helpful Meeting Resources</h2>

          <div class="row" style={{ paddingBottom: 25 }}>
            <div class="col-md-3 offset-2" style={{ backgroundColor: "#f2f2f2", borderRadius: 15 }}>
              <h2 class="font-weight-light" style={{ paddingBottom: 20, paddingTop: 20 }}>Math</h2>
              <div class="row">
                <div class="col-md-6" style={{paddingBottom: 50 }}>
                  <a href="https://www.mathgames.com/" target="_blank"><button style={{ background: "#DB0038", color: "#fff", borderRadius: 10, padding: 20, border: 0, width: "100%" }}>Math Games</button></a>
                </div>
                <div class="col-md-6" style={{paddingBottom: 50 }}>
                  <a href="https://www.coolmathgames.com/" target="_blank"><button style={{ background: "#DB0038", color: "#fff", borderRadius: 10, padding: 20, border: 0 }}>Cool Math Games</button></a>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6" style={{paddingBottom: 50 }}>
                  <a href="https://corbettmaths.com/" target="_blank"><button style={{ background: "#DB0038", color: "#fff", borderRadius: 10, padding: 20, border: 0 }}>Corbettmaths</button></a>
                </div>
                <div class="col-md-6" style={{paddingBottom: 50 }}>
                  <a href="https://tangmath.com/" target="_blank"><button style={{ background: "#DB0038", color: "#fff", borderRadius: 10, padding: 20, border: 0 }}>Greg Tang Math</button></a>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6" style={{paddingBottom: 15 }}>
                  <a href="https://illuminations.nctm.org/" target="_blank"><button style={{ background: "#DB0038", color: "#fff", borderRadius: 10, padding: 20, border: 0 }}>Illuminations</button></a>
                </div>
                <div class="col-md-6" style={{paddingBottom: 15 }}>
                  <a href="https://illustrativemathematics.org/" target="_blank"><button style={{ background: "#DB0038", color: "#fff", borderRadius: 10, padding: 20, border: 0 }}>Illustrative Math</button></a>
                </div>
              </div>
            </div>

            <div class="col-md-3 offset-2" style={{ backgroundColor: "#f2f2f2", borderRadius: 15 }}>
              <h2 class="font-weight-light" style={{ paddingBottom: 20, paddingTop: 20 }}>Science</h2>
              <div class="row">
                <div class="col-md-6" style={{paddingBottom: 50 }}>
                  <a href="https://studio.code.org/courses" target="_blank"><button style={{ background: "#f7c200", color: "#000", borderRadius: 10, padding: 20, border: 0, width: "100%" }}>Code.org</button></a>
                </div>
                <div class="col-md-6" style={{paddingBottom: 50 }}>
                  <a href="https://scratch.mit.edu/" target="_blank"><button style={{ background: "#f7c200", color: "#000", borderRadius: 10, padding: 20, border: 0, width: "100%" }}>Scratch</button></a>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6" style={{paddingBottom: 50 }}>
                  <a href="https://kids.frontiersin.org/" target="_blank"><button style={{ background: "#f7c200", color: "#000", borderRadius: 10, padding: 20, border: 0, width: "100%" }}>Frontiers for Young Minds</button></a>
                </div>
                <div class="col-md-6" style={{paddingBottom: 50 }}>
                  <a href="https://www.chemicool.com/" target="_blank"><button style={{ background: "#f7c200", color: "#000", borderRadius: 10, padding: 20, border: 0, width: "100%" }}>Chemicool</button></a>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6" style={{paddingBottom: 15 }}>
                  <a href="https://www.biointeractive.org/" target="_blank"><button style={{ background: "#f7c200", color: "#000", borderRadius: 10, padding: 20, border: 0, width: "100%" }}>Bio Interactive</button></a>
                </div>
                <div class="col-md-6" style={{paddingBottom: 15 }}>
                  <a href="https://www.hmhco.com/classzone-retired" target="_blank"><button style={{ background: "#f7c200", color: "#000", borderRadius: 10, padding: 20, border: 0, width: "100%" }}>Exploring Earth Investigations</button></a>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-3 offset-2" style={{ backgroundColor: "#f2f2f2", borderRadius: 15 }}>
              <h2 class="font-weight-light" style={{ paddingBottom: 20, paddingTop: 20 }}>Reading</h2>
              <div class="row">
                <div class="col-md-6" style={{paddingBottom: 50 }}>
                  <a href="https://storybird.com/read-picture-book" target="_blank"><button style={{ background: "#53BAC1", color: "#fff", borderRadius: 10, padding: 20, border: 0, width: "100%" }}>Story Bird</button></a>
                </div>
                <div class="col-md-6" style={{paddingBottom: 50 }}>
                  <a href="https://mpt.pbslearningmedia.org/collection/btl07-ex/" target="_blank"><button style={{ background: "#53BAC1", color: "#fff", borderRadius: 10, padding: 20, border: 0, width: "100%" }}>Between the Lions</button></a>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6" style={{paddingBottom: 50 }}>
                  <a href="https://www.biblionasium.com/#tab/content-summer-picks" target="_blank"><button style={{ background: "#53BAC1", color: "#fff", borderRadius: 10, padding: 20, border: 0, width: "100%" }}>Biblionasium</button></a>
                </div>
                <div class="col-md-6" style={{paddingBottom: 50 }}>
                  <a href="https://freerice.com/age-screen" target="_blank"><button style={{ background: "#53BAC1", color: "#fff", borderRadius: 10, padding: 20, border: 0, width: "100%" }}>Free Rice</button></a>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6" style={{paddingBottom: 15 }}>
                  <a href="http://www.inklesstales.com/" target="_blank"><button style={{ background: "#53BAC1", color: "#fff", borderRadius: 10, padding: 20, border: 0, width: "100%" }}>Inkless Tales</button></a>
                </div>
                <div class="col-md-6" style={{paddingBottom: 15 }}>
                  <a href="https://learn.khanacademy.org/" target="_blank"><button style={{ background: "#53BAC1", color: "#fff", borderRadius: 10, padding: 20, border: 0, width: "100%" }}>Khan Academy</button></a>
                </div>
              </div>
            </div>

            <div class="col-md-3 offset-2" style={{ backgroundColor: "#f2f2f2", borderRadius: 15 }}>
              <h2 class="font-weight-light" style={{ paddingBottom: 20, paddingTop: 20 }}>Writing</h2>
              <div class="row">
                <div class="col-md-6" style={{paddingBottom: 50 }}>
                  <a href="https://www.readwritethink.org/classroom-resources/student-interactives" target="_blank"><button style={{ background: "#519DD9", color: "#fff", borderRadius: 10, padding: 20, border: 0, width: "100%" }}>ReadWriteThink</button></a>
                </div>
                <div class="col-md-6" style={{paddingBottom: 50 }}>
                  <a href="https://www.funenglishgames.com/" target="_blank"><button style={{ background: "#519DD9", color: "#fff", borderRadius: 10, padding: 20, border: 0, width: "100%" }}>Fun English Games</button></a>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6" style={{paddingBottom: 50 }}>
                  <a href="https://writeandimprove.com/?lang=en-GB" target="_blank"><button style={{ background: "#519DD9", color: "#fff", borderRadius: 10, padding: 20, border: 0, width: "100%" }}>Write and Improve</button></a>
                </div>
                <div class="col-md-6" style={{paddingBottom: 50 }}>
                  <a href="https://www.quill.org/" target="_blank"><button style={{ background: "#519DD9", color: "#fff", borderRadius: 10,  border: 0, width: "100%" }}>Quill</button></a>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6" style={{paddingBottom: 15 }}>
                  <a href="https://www.grammarbook.com/" target="_blank"><button style={{ background: "#519DD9", color: "#fff", borderRadius: 10, padding: 20, border: 0, width: "100%" }}>Grammar Book</button></a>
                </div>
                <div class="col-md-6" style={{paddingBottom: 15 }}>
                  <a href="https://www.educationcity.com/us/" target="_blank"><button style={{ background: "#519DD9", color: "#fff", borderRadius: 10, padding: 20, border: 0, width: "100%" }}>Education City</button></a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* JOIN US AS A TAP MENTOR */}
        <div class="row align-items-center" style={{ paddingTop: 35, paddingBottom: 35, backgroundColor: "#f2f2f2" }}>
          <div class="col-lg-4 offset-2">
            <h1 class="font-weight-bold" style={{ textAlign: "center" }}>Join Us As a</h1>
            <h1 class="font-weight-bold" style={{ textAlign: "center" }}>TAP Mentor</h1>
          </div>
          <div class="col-lg-4 ">
            <div class="row">
              <h3 class="font-weight-semi-bold">What To Expect</h3>
              <p>
                Fill out the short Google Form embedded below, and we will contact
                you with next steps to join the program!
              </p>
            </div>
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
              <h3 class="font-weight-semi-bold">Join Our GroupMe</h3>
              <p>
                Join our email chain to stay up-to-date with all TAP programming
                and events.
              </p>
            </div>
          </div>
        </div>

        {/* MENTOR APPLICATION / GOOGLE FORM */}
        <div class="row align-items-center" style={{ paddingTop: 35, paddingBottom: 35 }}>
          <div class="col-lg-12" style={{ textAlign: "center" }}>
            <h3 class="font-weight-bold" style={{ textAlign: "center", paddingBottom: 25 }}>TAP Mentor Application</h3>
          </div>
          <div class="col-lg-8 offset-2" style={{ alignItems: "center" }}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScCTdF2fx78Nkrw-RYDBeetnMNUMhT1KptRi6V3Y9uBYy3VVA/viewform?embedded=true"
              width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
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
    </div >
  );
}

export default Mentors;