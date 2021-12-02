import React, { useState, useEffect } from "react";

{/* GRAPHQL QUERY */ }
const query = `
{
  tapAboutPageCollection {
    items{
      aboutUsText
      aboutUsImage{
        url 
      }
      aboutOurMentorsText
      aboutOurMentorsImage{
        url 
      }
      aboutOurMenteesText
      aboutOurMentees{
        url 
      }
      aboutTheChurchText
      aboutTheChurchMapLink
      
    }
  }
}
`;

function About() {

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

        setPage(data.tapAboutPageCollection.items[0]);
      });
  }, []);

  function UrlPatternValidation(URL) {
    const regex = new RegExp('https://www.google.com/maps/*');
    if (!regex.test(URL.URL)) {
      return "Wrong link! Check that the Google Form and Google Map links are in the correct locations in Contentful";
    } else {
      return <iframe src={URL.URL} title="Embedded Google Map showing the location of the church."
        width="90%" height="450" allowFullScreen="" loading="lazy">Loading...</iframe>
    };
  };

  if (!page) {
    return "Loading...";
  }

  return (
    <div className="about">
      <div className="container" style={{ maxWidth: "100%" }}>
        <div className="row align-items-center" style={{ paddingTop: 40, paddingBottom: 40 }}>
          <div className="col-lg-6 offset-1" style={{ display: 'flex' }}>
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              width='90%'
              src={page.aboutUsImage.url}
              alt="TAP Logo"
            />
          </div>
          <div className="col-lg-4">
            <h1 className="font-weight-bold">About Us</h1>
            <h4 className="font-weight-bold">Who We Are.</h4>
            <p>
              {page.aboutUsText}
            </p>
          </div>
        </div>

        <div className='row align-items-center' style={{ backgroundColor: "#53bac1", paddingBottom: 20, paddingTop: 20 }}>
          <div className="col-lg-6 offset-1">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              width='90%'
              align="center"
              src={page.aboutOurMentorsImage.url}
              alt="TAP Logo"
            />
          </div>
          <div className="col-lg-4">
            <h1 className="font-weight-bold" style={{ color: "white" }}>About Our Mentors</h1>
            <p style={{ color: "white" }}>
              {page.aboutOurMentorsText}
            </p>
          </div>
        </div>

        <div className='row align-items-center' style={{ backgroundColor: "#53bac1", paddingBottom: 20, paddingTop: 20 }}>
          <div className="col-lg-6 offset-1" style={{ display: 'flex' }}>
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              width='90%'
              src={page.aboutOurMentees.url}
              alt="TAP Logo"
            />
          </div>
          <div className="col-lg-4">
            <h1 className="font-weight-bold" style={{ color: "white" }}>About Our Mentees</h1>
            <p style={{ color: "white" }}>
              {page.aboutOurMenteesText}
            </p>
          </div>
        </div>

        <div className='row align-items-center' style={{ backgroundColor: "#53bac1", paddingBottom: 20, paddingTop: 20 }}>
          <div className="col-lg-6 offset-1" style={{ display: 'flex' }}>
            <UrlPatternValidation URL={page.aboutTheChurchMapLink} />
          </div>
          <div className="col-lg-4">
            <h1 className="font-weight-bold" style={{ color: "white" }}>About The Church</h1>
            <h3 className="font-weight-light" style={{ color: "white" }}>14th Ave Missionary Baptist Church</h3>
            <p style={{ color: "white" }}>
              {page.aboutTheChurchText}
            </p>
          </div>
        </div>

        <div className='row align-items-center' style={{ paddingBottom: 20, paddingTop: 20 }}>
          <h1 className="font-weight-bold" style={{ textAlign: "center" }}>Meet The Leadership Team</h1>
        </div>

        <div className="row" style={{ paddingTop: 25, paddingBottom: 25 }}>
          <div className="col-lg-4" style={{ textAlign: "center" }}>
            <h3 className="font-weight-bold">Caroline Riedl</h3>
            <h5>
              <b>Role:</b> Program Director
              <br></br>
              <b>Email:</b> caroline.c.riedl@vanderbilt.edu
            </h5>
          </div>
          <div className="col-lg-4" style={{ textAlign: "center" }}>
            <h3 className="font-weight-bold">Sam Suazo</h3>
            <h5>
              <b>Role:</b> Enrichment Coordinator
              <br></br>
              <b>Email:</b> samantha.r.suazo@vanderbilt.edu
            </h5>
          </div>
          <div className="col-lg-4" style={{ textAlign: "center" }}>
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