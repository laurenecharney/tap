import React, { useState, useEffect } from "react";
import taplogo from './taplogo.png';


{/* GRAPHQL QUERY */ }
const query = `
{
  tapMainCollection{
    items{
      homePageIntroText
      homepageImage{
        url
      }
      ourMission
      ourMissionImage{
        url
      }
      upcomingEvents
    }
  }
}
`;

{/* CONNECTING TO CONTENTFUL */ }
function Home() {
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

        setPage(data.tapMainCollection.items[0]);
      });
  }, []);

  if (!page) {
    return (
      <div className="home">
        <div className="container" style={{ maxWidth: "100%" }}>
          <div className="row align-items-center" style={{ backgroundColor: "#519dd9", paddingBottom: 40, paddingTop: 40 }}>
            <div className="col-lg-4 offset-2">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={taplogo}
                alt="TAP Logo"
              />
            </div>
            <div className="col-lg-4">
              <h1 className="font-weight-light" style={{ color: "white" }}>The Afterschool Program</h1>
              <p style={{ color: "white" }}>
                Email <a href="mailto:tapintoyoursuccess@gmail.com" style={{ color: "white" }}>tapintoyoursuccess@gmail.com</a> to learn more about the overview of
                The Afterschool Program.
              </p>
            </div>
          </div>

          <div className="row align-items-center " style={{ paddingTop: 40, paddingBottom: 40 }}>
            <div className="col-lg-4 offset-2">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src={taplogo}
                width="400"
                alt="TAP Logo"
              />
            </div>
            <div className="col-lg-4">
              <h3 className="font-weight-bold">Our Mission</h3>
              Email <a href="mailto:tapintoyoursuccess@gmail.com" style={{ color: "black" }}>tapintoyoursuccess@gmail.com</a> to learn more about our mission.
            </div>
          </div>

          {/* EMBEDDED GOOGLE CALENDAR */}
          <div className="row" style={{ paddingTop: 35, paddingBottom: 35 }}>
            <div className="col-lg-8 offset-2">
              <div style={{ textAlign: "center", paddingBottom: 25 }}>
                <h1 className="font-weight-bold">Upcoming Events </h1>
              </div>

              <p style={{ textAlign: "center" }}>
                The calendar currently can not load, please contact us at <a href="mailto:tapintoyoursuccess@gmail.com" style={{ color: "black" }}>tapintoyoursuccess@gmail.com</a>
                <br></br>
                TAP usually meets from 4-5pm on Mondays, Tuesdays, and Wednesdays.
                <br></br>
                Sorry for the inconvenience!
              </p>
            </div>
          </div>

          {/* VIRTUAL ZOOM LINKS */}
          <div className="row align-items-center" style={{ paddingTop: 20, paddingBottom: 20, backgroundColor: "#f2f2f2" }}>
            <div className="col-lg-4 offset-2" style={{ textAlign: "center" }}>
              <h1 className="font-weight-bold">Join Your Virtual Zoom Session</h1>
            </div>

            <div className="col-lg-4" style={{ display: 'flex' }}>
              <div className="col-md-12">
                <div className="row" style={{ padding: 20 }}>
                  <button style={{ background: "#519DD9", color: "#fff", borderRadius: 10, padding: 25, border: 0 }}>Monday</button>
                </div>
                <div className="row" style={{ padding: 20 }}>
                  <button style={{ background: "#519DD9", color: "#fff", borderRadius: 10, padding: 25, border: 0 }}> Tuesday  </button>
                </div>
                <div className="row" style={{ padding: 20 }}>
                  <button style={{ background: "#519DD9", color: "#fff", borderRadius: 10, padding: 25, border: 0 }}>Wednesday </button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ padding: 40 }}>
            <p>.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="home">
      <div className="container" style={{ maxWidth: "100%" }}>
        <div className="row align-items-center" style={{ backgroundColor: "#519dd9", paddingBottom: 40, paddingTop: 40 }}>
          <div className="col-lg-4 offset-2">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={page.homepageImage.url}
              alt="TAP Logo"
            />
          </div>
          <div className="col-lg-4">
            <h1 className="font-weight-light" style={{ color: "white" }}>The Afterschool Program</h1>
            <p style={{ color: "white" }}>
              {page.homePageIntroText}
            </p>
          </div>
        </div>

        <div className="row align-items-center " style={{ paddingTop: 40, paddingBottom: 40 }}>
          <div className="col-lg-4 offset-2">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={page.ourMissionImage.url}
              width="400"
              alt="TAP Logo"
            />
          </div>
          <div className="col-lg-4">
            <h3 className="font-weight-bold">Our Mission</h3>
            {page.ourMission}
          </div>
        </div>

        {/* EMBEDDED GOOGLE CALENDAR */}
        <div className="row" style={{ paddingTop: 35, paddingBottom: 35 }}>
          <div className="col-lg-8 offset-2">
            <div style={{ textAlign: "center", paddingBottom: 25 }}>
              <h1 className="font-weight-bold">Upcoming Events </h1>
            </div>

            <iframe src={page.upcomingEvents} title="Displaying TAP's Google Calendar with upcoming events."
              frameBorder="0" width="100%" height="550" scrolling="no"></iframe>
          </div>
        </div>

        {/* VIRTUAL ZOOM LINKS */}
        <div className="row align-items-center" style={{ paddingTop: 20, paddingBottom: 20, backgroundColor: "#f2f2f2" }}>
          <div className="col-lg-4 offset-2" style={{ textAlign: "center" }}>
            <h1 className="font-weight-bold">Join Your Virtual Zoom Session</h1>
          </div>

          <div className="col-lg-4" style={{ display: 'flex' }}>
            <div className="col-md-12">
              <div className="row" style={{ padding: 20 }}>
                <button style={{ background: "#519DD9", color: "#fff", borderRadius: 10, padding: 25, border: 0 }}>Monday</button>
              </div>
              <div className="row" style={{ padding: 20 }}>
                <button style={{ background: "#519DD9", color: "#fff", borderRadius: 10, padding: 25, border: 0 }}> Tuesday  </button>
              </div>
              <div className="row" style={{ padding: 20 }}>
                <button style={{ background: "#519DD9", color: "#fff", borderRadius: 10, padding: 25, border: 0 }}>Wednesday </button>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: 40 }}>
          <p>.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;