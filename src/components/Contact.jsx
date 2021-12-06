import React, {useState, useEffect } from "react";



const query = `
{
  tapContactPageCollection{
    items{
      contactUsImage{
        url
      }
      instagram
      email
      facebook
      facultyAdvisor
    }
  }
}
`;


function Contact() {

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

        setPage(data.tapContactPageCollection.items[0]);
      });
  }, []);

  if (!page) {
    return "Loading...";
  }
  

  return (
    <div className="contact">
      <div className="container" style={{maxWidth: "100%"}}>

        <div className="row align-items-center" style={{backgroundColor: "#519dd9", paddingTop: 40, paddingBottom: 40, height: "100%"}}>
          <div className="col-lg-5 offset-2">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src={page.contactUsImage.url}
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light" style={{color: "white"}}>Contact Us</h1>
            <h5 style={{paddingTop: 10, paddingBottom: 10, color: "white"}}>
              <b>Email:</b> <a href="mailto:tapintoyoursuccess@gmail.com" style={{color: "white"}}>{page.email}</a>
            </h5>
            <h5 style={{paddingTop: 10, paddingBottom: 10, color: "white"}}>
            <b>Instagram:</b> <a href={page.instagram} style={{color: "white"}}>@tapnashville</a>
            </h5>
            <h5 style={{paddingTop: 10, paddingBottom: 10, color: "white"}}>
              <b>Facebook:</b> <a href={page.facebook} style={{color: "white"}}>The Afterschool Program</a>
            </h5>
            <h5 style={{paddingTop: 10, paddingBottom: 10, color: "white"}}>
              <b>Faculty Advisor:</b> {page.facultyAdvisor}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;