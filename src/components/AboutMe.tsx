import React from 'react';
// import { FaAward } from 'react-icons/fa';
// import { VscFolderLibrary } from 'react-icons/vsc';
import profile from '../assets/img/profile.png';
import './about.css';
import {  Container } from "react-bootstrap";


const AboutMe: React.FC = () => {
  return (
    <section className="about" id="about">
      <div style={{width: '100%', textAlign: 'center', marginBottom: '3em'}}>
      <h1>About Me</h1>
      </div>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile} alt="me" />
          </div>
        </div>
        <div className="about__content">

          <p>Full Stack developer with background knowledge of MERN stacks ith redux along with a knack of building applications with utmost proficiency. Strong professional with a BSC willing to be an asset for an organisation</p>

          <ul>
            <li>Full Stack Web Development</li>
            <li>Interactive Frontend as per the design</li>
            <li>Vue and Vuex</li>
            <li>React and Redux</li>
            <li>Building Rest Api</li>
            <li>Managing Databases</li>
            <li>Blockchain & Smart Contracts</li>
            <li>Browser Web Extension</li>
            <li>Docker & CICD</li>
          </ul>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default AboutMe


{/* <article className="about__card"> */}
{/* <FaAward className="about__icon" /> */}
{/* <h5>Experience</h5>
<small>1 year</small>
</article>
<article className="about__card"> */}
{/* <VscFolderLibrary className="about__icon" /> */}
{/* <h5>Projects</h5>
<small>20+ Completed Projects</small>
</article> */}