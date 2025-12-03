import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a DevOps & Cloud Engineer in training who loves turning ideas into automated, scalable, and reliable cloud systems. Over time, I’ve explored various technologies and discovered my passion for containerization, CI/CD pipelines, and cloud deployments that power modern applications.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Docker, Jenkins, AWS, Azure, Kubernetes, Linux, Git, and networking fundamentals,{" "}
                </b>
              </i>
              — and I enjoy working across both infrastructure and application pipelines.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  CI/CD automation, container orchestration, cloud infrastructure design, and performance optimization.{" "}
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I build hands-on projects that involve
              <b className="purple"> end-to-end deployments </b> multi-service applications with Docker Compose, multi-service applications with Docker Compose{" "}
              <i>
                <b className="purple">Jenkins</b> and cloud platforms like {" "}
                <b className="purple">AWS</b> and {" "}
                <b className="purple">Azure</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
