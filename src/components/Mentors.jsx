import React from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import image from './MentorPhoto.jpg'

function Mentors() {
  return (
    <div className="mentors">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-6" style={{display: 'flex'}}>
            <img
              class="img-fluid rounded mb-4 mb-md-0"
              style={{
                resizeMode: 'contain'}}
              src={image}
              alt=""
            />
          </div>
          <div class="col-lg-6">
            <h1 class="font-weight-light">Our Mentors</h1>
            <p>
              Our mentors are Vanderbilt students from all different backgrounds. 
              The unqiue set of menotrs brings a diversity of thought and 
              educational strengths to our program. Each mentor is pair with a 
              student, and the mentor meets with their student at least once a
              week. 
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
          <div style={{display: 'flex'}}>
          <h1 class="font-weight-light">Join Your Vitual Zoom Session</h1>
        </div>
        <div style={{display: 'flex'}}>
        <div class="col-md-12">
          <div class="row" style={{paddingTop:50}}> 
          <div class="col-md-3">
          <button style={{background: "#519DD9", color: "#fff", borderRadius: 10, padding: 25, border: 0}}>Monday</button>
          </div>
          <div class="col-md-3">
          <button style={{background: "#519DD9", color: "#fff", borderRadius: 10, padding: 25, border: 0}}> Tuesday  </button>
          </div>
          <div class="col-md-3">
          <button style={{background: "#519DD9", color: "#fff", borderRadius: 10, padding: 25, border: 0}}>Wednesday </button>
          </div>
          </div>
        </div>
        </div>
          </div>
          <div class="col-lg-6">
          <div style={{display: 'flex', paddingBottom:50}}>
          <h1 class="font-weight-light">Upcoming Events </h1>
          
        </div>
        <div style={{display: 'flex'}}>
          <Calendar />
        </div>
          </div>
        </div>


        <div style={{display: 'flex', paddingBottom:50, paddingTop:50}}>
          <h1 class="font-weight-light">Helpful Resources</h1>
        </div>
        <div style={{display: 'flex', paddingBottom:50}}>
          <h2 class="font-weight-light">Math</h2>
        </div>
        <div class="col-md-12">
        <div class="row">
          <div class="col-md-2" style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#DB0038", color: "#fff", borderRadius: 10, padding: 20, border: 0}}>Math Games</button>
          </div>
          <div class="col-md-2"  style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#DB0038", color: "#fff", borderRadius: 10, padding: 20, border: 0}}>Cool Math Games</button>
          </div>
          <div class="col-md-2"  style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#DB0038", color: "#fff", borderRadius: 10, padding: 20, border: 0}}>Corbettmaths</button>
          </div>
          <div class="col-md-2"  style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#DB0038", color: "#fff", borderRadius: 10, padding: 20, border: 0}}>Greg Tang Math</button>
          </div>
          <div class="col-md-2"  style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#DB0038", color: "#fff", borderRadius: 10, padding: 20, border: 0}}>Illuminations</button>
          </div>
          <div class="col-md-2"  style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#DB0038", color: "#fff", borderRadius: 10, padding: 20, border: 0}}>Illustrative Math</button>
          </div>
        </div>
        </div>
        <div style={{display: 'flex', paddingBottom:50}}>
          <h2 class="font-weight-light">Science</h2>
        </div>
        <div class="col-md-12">
        <div class="row">
          <div class="col-md-2" style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#f7c200", color: "#000", borderRadius: 10, padding: 20, border: 0}}>Code.org</button>
          </div>
          <div class="col-md-2"  style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#f7c200", color: "#000", borderRadius: 10, padding: 20, border: 0}}>Scratch</button>
          </div>
          <div class="col-md-2"  style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#f7c200", color: "#000", borderRadius: 10, padding: 20, border: 0}}>Frontiers for Young Minds</button>
          </div>
          <div class="col-md-2"  style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#f7c200", color: "#000", borderRadius: 10, padding: 20, border: 0}}>Chemicool</button>
          </div>
          <div class="col-md-2"  style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#f7c200", color: "#000", borderRadius: 10, padding: 20, border: 0}}>Bio Interactive</button>
          </div>
          <div class="col-md-2"  style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#f7c200", color: "#000", borderRadius: 10, padding: 20, border: 0}}>Exploring Earth Investigations</button>
          </div>
        </div>
        </div>
        <div style={{display: 'flex', paddingBottom:50}}>
          <h2 class="font-weight-light">Reading</h2>
        </div>
        <div class="col-md-12">
        <div class="row">
          <div class="col-md-2" style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#53BAC1", color: "#fff", borderRadius: 10, padding: 20, border: 0}}>Story Bird</button>
          </div>
          <div class="col-md-2"  style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#53BAC1", color: "#fff", borderRadius: 10, padding: 20, border: 0}}>Between the Lions</button>
          </div>
          <div class="col-md-2"  style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#53BAC1", color: "#fff", borderRadius: 10, padding: 20, border: 0}}>Biblionasium</button>
          </div>
          <div class="col-md-2"  style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#53BAC1", color: "#fff", borderRadius: 10, padding: 20, border: 0}}>Free Rice</button>
          </div>
          <div class="col-md-2"  style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#53BAC1", color: "#fff", borderRadius: 10, padding: 20, border: 0}}>Inkless Tales</button>
          </div>
          <div class="col-md-2"  style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#53BAC1", color: "#fff", borderRadius: 10, padding: 20, border: 0}}>Khan Academy</button>
          </div>
        </div>
        </div>
        <div style={{display: 'flex', paddingBottom:50}}>
          <h2 class="font-weight-light">Writing</h2>
        </div>
        <div class="col-md-12">
        <div class="row">
          <div class="col-md-2" style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#519DD9", color: "#fff", borderRadius: 10, padding: 20, border: 0}}>ReadWriteThink</button>
          </div>
          <div class="col-md-2"  style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#519DD9", color: "#fff", borderRadius: 10, padding: 20, border: 0}}>Fun English Games</button>
          </div>
          <div class="col-md-2"  style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#519DD9", color: "#fff", borderRadius: 10, padding: 20, border: 0}}>Write and Improve</button>
          </div>
          <div class="col-md-2"  style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#519DD9", color: "#fff", borderRadius: 10, padding: 20, border: 0}}>Quill</button>
          </div>
          <div class="col-md-2"  style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#519DD9", color: "#fff", borderRadius: 10, padding: 20, border: 0}}>Grammar Book</button>
          </div>
          <div class="col-md-2"  style={{display: 'flex', paddingBottom:50}}>
              <button style={{background: "#519DD9", color: "#fff", borderRadius: 10, padding: 20, border: 0}}>Education City</button>
          </div>

        </div>
        </div>





        <div style={{padding:50}}>
              <p>.</p>
          </div>
      </div>
    </div>
  );
}

export default Mentors;