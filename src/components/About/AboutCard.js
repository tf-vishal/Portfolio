import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Vishal Sharma</span>{" "}
            from <span className="purple">Burhanpur, India</span>.
            <br />
            I’m a{" "}
            <span className="purple">DevOps & Cloud Engineer in training,</span> passionate about building{" "}
            <span className="purple">automated, scalable, and reliable cloud deployments</span> using modern DevOps tools and practices {" "}.
            <br />
            <br />I hold a {" "}
            <span className="purple">Bachelor of Computer Applications (BCA)</span> from{" "}
            <span className="purple">Makhanlal Chaturvedi National University of Journalism and Communication</span> .
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring cloud & DevOps tools ☁️ 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & exploring  new places 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games to relax 🎮
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Striving to automate today for a more reliable tomorrow."{" "}
          </p>
          <footer className="blockquote-footer">Vishal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
