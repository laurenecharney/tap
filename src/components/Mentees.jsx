import React, { useState, useEffect } from "react";



const query = `
{
  tapMenteesPageCollection{
    items{
      menteesIntroText
      menteesIntroImage{
        url
      }
      howOurMentorsCanHelpText
      howOurMentorsCanHelpImage{
        url
      }
      mentoringStructuresText
      mentorshipStructuresImage{
        url
      }
      menteeTestimoniesText
      menteeTestimoniesImage{
        url
      }
      menteesApplication
    }
  }
}
`;

function Mentees() {

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

        setPage(data.tapMenteesPageCollection.items[0]);
      });
  }, []);

  if (!page) {
    return "Loading...";
  }

  return (
    <div className="mentees">
      <div className="container" style={{ maxWidth: "100%" }}>
        <div className="row align-items-center" style={{ paddingTop: 35, paddingBottom: 35, backgroundColor: "#519dd9" }}>
          <div className="col-lg-6 offset-1">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              height="300"
              src={page.menteesIntroImage.url}
              alt=""
            />
          </div>
          <div className="col-lg-4">
            <h1 className="font-weight-light" style={{ color: "white" }}>Our Mentees</h1>
            <h5 style={{ color: "white" }}>
               {page.menteesIntroText}
            </h5>
          </div>
        </div>

        <div className="row align-items-center my-5">
          <div className="col-lg-4 offset-2" style={{ alignItems: "center" }}>
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={page.howOurMentorsCanHelpImage.url}
              alt=""
            />
          </div>
          <div className="col-lg-4">
            <h2>How Our Mentors Can Help</h2>
            <p>{page.howOurMentorsCanHelpText}
            </p>
          </div>
        </div>

        <div className="row align-items-center my-5">
          <div className="col-lg-4 offset-2">
            <h2>Mentorship Structures</h2>
            <p>{page.mentoringStructuresText}</p>
          </div>
          <div className="col-lg-4" style={{ alignItems: "center" }}>
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={page.mentorshipStructuresImage.url}
              alt=""
            />
          </div>
        </div>
      
        <div className="row align-items-center my-5">
          <div className="col-lg-4 offset-2" style={{ alignItems: "center" }}>
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={page.menteeTestimoniesImage.url}
              alt=""
            />
          </div>
          <div className="col-lg-4">
            <h2>Mentee Testimonies</h2>
            <p>{page.menteeTestimoniesText}</p>
          </div>
        </div>

        <div className="row align-items-center" style={{ paddingTop: 35, paddingBottom: 35, backgroundColor: "#f2f2f2" }}>
          <div className="col-lg-4 offset-2">
            <h1 className="font-weight-bold" style={{ textAlign: "center" }}>Join Us As a</h1>
            <h1 className="font-weight-bold" style={{ textAlign: "center" }}>TAP Mentee</h1>
          </div>
          <div className="col-lg-4 ">
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
              <h3 className="font-weight-semi-bold">Join Our Email Chain</h3>
              <p>
                Reach out to Ms. Tam for more information
              </p>
            </div>
          </div>
        </div>

        {/* Mentee application / Google Form */}
        <div className="row align-items-center" style={{ paddingTop: 35, paddingBottom: 35 }}>
          <div className="col-lg-12" style={{ textAlign: "center" }}>
            <h3 className="font-weight-bold" style={{ textAlign: "center", paddingBottom: 25 }}>TAP Mentee Application</h3>
          </div>
          <div className="col-lg-8 offset-2" style={{ alignItems: "center" }}>
            <iframe src={page.menteesApplication} title="Displaying TAP's Google Form to sign up as a mentee."
              width="100%" height="975" frameBorder="0" marginHeight="0" marginWidth="0">Loading???</iframe>
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
    </div>
  );
}

export default Mentees;