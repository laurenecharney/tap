import React, { useState, useEffect } from "react";
import 'react-calendar/dist/Calendar.css';


const query = `
{
  tapMentorspageCollection{
    items{
      topMentorsImage{
        url
      }
      mentorsIntroText
      mentorsApplication
    }
  }
}
`;

function Mentors() {

  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/v2hmb9eckh3e/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer gAy1xtMkzYZQ1kvD6d2IuiD4UFhItH0M4MgDeDqs4Bo`,
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setPage(data.tapMentorspageCollection.items[0]);
      });
  }, []);

  if (!page) {
    return "Loading...";
  }

  // verify that the TAP exec team didn't accidentally switch the form and map link
  function UrlPatternValidation(URL) {
    const regex = new RegExp('https://docs.google.com/forms/*');
    if (!regex.test(URL.URL)) {
      console.log(URL.URL)
      return "Wrong link! Check that the Google Form and Google Map links are in the correct locations in Contentful.";
    } else {
      return <iframe src={URL.URL} title="Displaying TAP's Google Form to sign up as a mentor."
        width="100%" height="1000" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
    };
  };

  return (
    <div className="mentors">
      <div className="container" style={{ maxWidth: "100%" }}>
        <div className="row align-items-center" style={{ paddingTop: 35, paddingBottom: 35, backgroundColor: "#db0038" }}>
          <div className="col-lg-4 offset-2" style={{ display: 'flex' }}>
            <img
              className="img-fluid rounded mb-4 mb-md-0"
              style={{
                resizeMode: 'contain'
              }}
              src={page.topMentorsImage.url}
              alt=""
            />
          </div>
          <div className="col-lg-4">
            <h1 className="font-weight-light" style={{ color: "white" }}>Our Mentors</h1>
            <h5 style={{ color: "white" }}>
              {page.mentorsIntroText}
            </h5>
          </div>
        </div>

        {/* MEETING RESOURCE LINKS */}
        <div className="row align-items-center" style={{ paddingBottom: 50, paddingTop: 50, textAlign: "center" }}>
          <h2 className="font-weight-bold" style={{ paddingBottom: 30 }}>Helpful Meeting Resources</h2>

          <div className="row" style={{ paddingBottom: 25 }}>
            <div className="col-md-4 offset-1" style={{ backgroundColor: "#f2f2f2", borderRadius: 15 }}>
              <h2 className="font-weight-light" style={{ paddingBottom: 20, paddingTop: 20 }}>Math</h2>
              <div className="row">
                <div className="col-md-6" style={{ paddingBottom: 50 }}>
                  <button onClick={() => window.open("https://www.mathgames.com/", '_blank')} style={{ background: "#DB0038", color: "#fff", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> Math Games </button>
                </div>
                <div className="col-md-6" style={{ paddingBottom: 50 }}>
                  <button onClick={() => window.open("https://www.coolmathgames.com/", '_blank')} style={{ background: "#DB0038", color: "#fff", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> Cool Math Games </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6" style={{ paddingBottom: 50 }}>
                  <button onClick={() => window.open("https://corbettmaths.com/", '_blank')} style={{ background: "#DB0038", color: "#fff", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> Corbettmaths </button>
                </div>
                <div className="col-md-6" style={{ paddingBottom: 50 }}>
                  <button onClick={() => window.open("https://tangmath.com/", '_blank')} style={{ background: "#DB0038", color: "#fff", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> Greg Tang Math </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6" style={{ paddingBottom: 15 }}>
                  <button onClick={() => window.open("https://illuminations.nctm.org/", '_blank')} style={{ background: "#DB0038", color: "#fff", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> Illuminations </button>
                </div>
                <div className="col-md-6" style={{ paddingBottom: 15 }}>
                  <button onClick={() => window.open("https://illustrativemathematics.org/", '_blank')} style={{ background: "#DB0038", color: "#fff", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> Illustrative Math </button>
                </div>
              </div>
            </div>

            <div className="col-md-4 offset-2" style={{ backgroundColor: "#f2f2f2", borderRadius: 15 }}>
              <h2 className="font-weight-light" style={{ paddingBottom: 20, paddingTop: 20 }}>Science</h2>
              <div className="row">
                <div className="col-md-6" style={{ paddingBottom: 50 }}>
                  <button onClick={() => window.open("https://studio.code.org/courses", '_blank')} style={{ background: "#f7c200", color: "#000", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> Code.org </button>
                </div>
                <div className="col-md-6" style={{ paddingBottom: 50 }}>
                  <button onClick={() => window.open("https://scratch.mit.edu/", '_blank')} style={{ background: "#f7c200", color: "#000", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> Scratch </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6" style={{ paddingBottom: 50 }}>
                  <button onClick={() => window.open("https://kids.frontiersin.org/", '_blank')} style={{ background: "#f7c200", color: "#000", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> Frontiers for Young Minds </button>
                </div>
                <div className="col-md-6" style={{ paddingBottom: 50 }}>
                  <button onClick={() => window.open("https://www.chemicool.com/", '_blank')} style={{ background: "#f7c200", color: "#000", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> Chemicool </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6" style={{ paddingBottom: 15 }}>
                  <button onClick={() => window.open("https://www.biointeractive.org/", '_blank')} style={{ background: "#f7c200", color: "#000", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> Bio Interactive </button>
                </div>
                <div className="col-md-6" style={{ paddingBottom: 15 }}>
                  <button onClick={() => window.open("https://www.hmhco.com/classzone-retired", '_blank')} style={{ background: "#f7c200", color: "#000", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> Exploring Earth Investigations </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 offset-1" style={{ backgroundColor: "#f2f2f2", borderRadius: 15 }}>
              <h2 className="font-weight-light" style={{ paddingBottom: 20, paddingTop: 20 }}>Reading</h2>
              <div className="row">
                <div className="col-md-6" style={{ paddingBottom: 50 }}>
                  <button onClick={() => window.open("https://storybird.com/read-picture-book", '_blank')} style={{ background: "#53BAC1", color: "#fff", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> Story Bird </button>
                </div>
                <div className="col-md-6" style={{ paddingBottom: 50 }}>
                  <button onClick={() => window.open("https://mpt.pbslearningmedia.org/collection/btl07-ex/", '_blank')} style={{ background: "#53BAC1", color: "#fff", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> Between the Lions </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6" style={{ paddingBottom: 50 }}>
                  <button onClick={() => window.open("https://www.biblionasium.com/#tab/content-summer-picks", '_blank')} style={{ background: "#53BAC1", color: "#fff", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> Biblionasium </button>
                </div>
                <div className="col-md-6" style={{ paddingBottom: 50 }}>
                  <button onClick={() => window.open("https://freerice.com/age-screen", '_blank')} style={{ background: "#53BAC1", color: "#fff", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> Free Rice </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6" style={{ paddingBottom: 15 }}>
                  <button onClick={() => window.open("http://www.inklesstales.com/", '_blank')} style={{ background: "#53BAC1", color: "#fff", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> Inkless Tales </button>
                </div>
                <div className="col-md-6" style={{ paddingBottom: 15 }}>
                  <button onClick={() => window.open("https://learn.khanacademy.org/", '_blank')} style={{ background: "#53BAC1", color: "#fff", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> Khan Academy </button>
                </div>
              </div>
            </div>

            <div className="col-md-4 offset-2" style={{ backgroundColor: "#f2f2f2", borderRadius: 15 }}>
              <h2 className="font-weight-light" style={{ paddingBottom: 20, paddingTop: 20 }}>Writing</h2>
              <div className="row">
                <div className="col-md-6" style={{ paddingBottom: 50 }}>
                  <button onClick={() => window.open("https://www.readwritethink.org/classroom-resources/student-interactives", '_blank')} style={{ background: "#519DD9", color: "#fff", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> ReadWriteThink </button>
                </div>
                <div className="col-md-6" style={{ paddingBottom: 50 }}>
                  <button onClick={() => window.open("https://www.funenglishgames.com/", '_blank')} style={{ background: "#519DD9", color: "#fff", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> Fun English Games </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6" style={{ paddingBottom: 50 }}>
                  <button onClick={() => window.open("https://writeandimprove.com/?lang=en-GB", '_blank')} style={{ background: "#519DD9", color: "#fff", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> Write and Improve </button>
                </div>
                <div className="col-md-6" style={{ paddingBottom: 50 }}>
                  <button onClick={() => window.open("https://www.quill.org/", '_blank')} style={{ background: "#519DD9", color: "#fff", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> Quill </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6" style={{ paddingBottom: 15 }}>
                  <button onClick={() => window.open("https://www.grammarbook.com/", '_blank')} style={{ background: "#519DD9", color: "#fff", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> Grammar Book </button>
                </div>
                <div className="col-md-6" style={{ paddingBottom: 15 }}>
                  <button onClick={() => window.open("https://www.educationcity.com/us/", '_blank')} style={{ background: "#519DD9", color: "#fff", borderRadius: 10, padding: 25, border: 0, width: "100%" }}> Education City </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* JOIN US AS A TAP MENTOR */}
        <div className="row align-items-center" style={{ paddingTop: 35, paddingBottom: 35, backgroundColor: "#f2f2f2" }}>
          <div className="col-lg-4 offset-2">
            <h1 className="font-weight-bold" style={{ textAlign: "center" }}>Join Us As a</h1>
            <h1 className="font-weight-bold" style={{ textAlign: "center" }}>TAP Mentor</h1>
          </div>
          <div className="col-lg-4 ">
            <div className="row">
              <h3 className="font-weight-semi-bold">What To Expect</h3>
              <p>
                Fill out the short Google Form embedded below, and we will contact
                you with next steps to join the program!
              </p>
            </div>
            <div className="row">
              <h3 className="font-weight-semi-bold">Application Process</h3>
              <p>
                Fill out the short Google Form embedded below, and we will contact
                you with next steps to join the program!
              </p>
            </div>
            <div className="row">
              <h3 className="font-weight-semi-bold">Why TAP</h3>
              <p>
                The Afterschool Program fosters mentorships that improve students'
                academic and personal lives in the long term.
              </p>
            </div>
            <div className="row">
              <h3 className="font-weight-semi-bold">Join Our GroupMe</h3>
              <p>
                Join our email chain to stay up-to-date with all TAP programming
                and events.
              </p>
            </div>
          </div>
        </div>

        {/* MENTOR APPLICATION / GOOGLE FORM */}
        <div className="row align-items-center" style={{ paddingTop: 35, paddingBottom: 35 }}>
          <div className="col-lg-12" style={{ textAlign: "center" }}>
            <h3 className="font-weight-bold" style={{ textAlign: "center", paddingBottom: 25 }}>TAP Mentor Application</h3>
          </div>
          <div className="col-lg-8 offset-2" style={{ alignItems: "center" }} >
            {/* <iframe src={page.mentorsApplication} 
              width="100%" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
            <UrlPatternValidation URL={page.mentorsApplication} />
            <p style={{ textAlign: "center" }}>
              If the form does not load, please contact us at <a href="mailto:tapintoyoursuccess@gmail.com" style={{ color: "black" }}>tapintoyoursuccess@gmail.com</a>
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