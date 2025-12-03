import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
           "DevOps Engineer",
           "Cloud Engineer",
           "CI/CD Automation Enthusiast",
           "Docker & Kubernetes Learner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
