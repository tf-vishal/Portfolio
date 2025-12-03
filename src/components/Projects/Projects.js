import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/home.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Online Shop – Containerized Deployment (AWS EC2)"
              description="Containerized and deployed an e-commerce app on AWS EC2 using Docker & Docker Compose, achieving 50% faster deployments, 1GB smaller images, with automated setup and security scanning via Docker Scout."
              ghLink="https://github.com/tf-vishal/online-shop"
              demoLink="https://online-shop-ecru-zeta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chattingo"
              description="Automated the deployment of a Dockerized three-tier app on Azure with Jenkins CI/CD & Docker Compose, featuring zero-touch releases and automatic rollback for safe production deployments."
              ghLink="https://github.com/tf-vishal/chattingo"
              demoLink="https://full-stack-chat-app-xi.vercel.app/"
            />
          </Col>
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
