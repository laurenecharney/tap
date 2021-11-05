import React, {useState, useEffect } from "react";
import taplogo from './taplogo.png';


{/* GRAPHQL QUERY */}
const query = `
{
  tapMainCollection{
    items{
      homepageImage{
        url
      }
      homepageIntoText
    }
  }
}
`;

{/* CONNECTING TO CONTENTFUL */}
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
    return "Loading...";
  }

  return (
    <div className="home">
      <div className="container" style={{ maxWidth: "100%" }}>
        <div className="row align-items-center" style={{ backgroundColor: "#519dd9", paddingBottom: 40, paddingTop: 40}}>
          <div className="col-lg-4 offset-2">
            <img
              className= "img-fluid rounded mb-4 mb-lg-0"
              src={page.homepageImage.url}
              alt="TAP Logo"
            />
          </div>
          <div className="col-lg-4">
            <h1 className="font-weight-light" style={{ color: "white"}}>The Afterschool Program</h1>
            <p style={{ color: "white"}}>
              The Afterschool Program, or TAP for short, is a non-profit program whose mission
              is to break the poverty cycle and close the achievement gap in children. Since 2011,
              TAP has paired college student volunteers with Nashville students
              to focus on literacy development and social enrichment, allowing children to tap
              into their success!
            </p>
          </div>
        </div>

        <div className="row align-items-center " style={{ paddingTop: 40, paddingBottom: 40 }}>
          <div className="col-lg-4 offset-2">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={taplogo}
              width = "400"
              alt="TAP Logo"
            />
          </div>
          <div className="col-lg-4">
            <h3 className="font-weight-bold">Our Mission</h3>
            <p>
              Founded in 2011, TAP is a collaboration between
              Fourteenth Avenue Baptist Church and Vanderbilt
              University focusing on literacy development. The
              organization continues to be entirely student-led.
            </p>
            <p>Out goal is to help close the achievement gap by
              providing academic and social enrichment for the
              youth that we serve.</p>
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