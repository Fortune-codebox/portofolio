import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import streaties from "../assets/img/streaties.png";
import greenguard from "../assets/img/greenguard.png";
import vandrezzer from "../assets/img/vandrezzer.png";
import learnekia from '../assets/img/learnekia.png';
import portfolio from '../assets/img/portfolio.png';
import ettasluxury from '../assets/img/ettasluxury.png';
import leriquec from '../assets/img/leriquec.png'
import React from 'react'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects: React.FC = () => {

  const projects = [
    {
      title: 'My Portfolio',
      description: 'My Portfolio Website built with React.js',
      imgUrl: portfolio
    },
    {
      title: "Streaties.co",
      description: "Design & Development of an E-cormerce Website",
      imgUrl: streaties,
    },
    {
      title: "Learnerkia ",
      description: "advanced software-as-a-service (saas)-based, digital-content-driven and edtech platform that offers the followings services",
      imgUrl: learnekia,
    },
    {
      title: 'EttasLuxury',
      description: 'An E-cormmerce Website for Perfumes & Deodorant',
      imgUrl: ettasluxury
    },
    {
      title: "Vandrezzer",
      description: "Design & Development",
      imgUrl: vandrezzer,
    },
    {
      title: "Leriquec E-cormmerce",
      description: "A Leriquec Company Ecormmerce Website",
      imgUrl: leriquec,
    }

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Some of the projects i have worked on</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Others</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {
                        <ProjectCard
                        title='GreenGuard Adblocker'
                        description= 'Web Extension Adblocker for blocking ads and Tracking'
                        imgUrl={greenguard}
                      />
                      }
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">

                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={vandrezzer}></img>
    </section>
  )
}