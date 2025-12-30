import { Col, Row } from "react-bootstrap";
import Go from "../../Assets/TechIcons/go.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Ansible from "../../Assets/TechIcons/Ansible.svg";
import ArgoCD from "../../Assets/TechIcons/ArgoCD.svg";
import Azure from "../../Assets/TechIcons/Azure.svg";
import AzureDevops from "../../Assets/TechIcons/AzureDevops.svg";
import Bash from "../../Assets/TechIcons/Bash.svg";
import GitLab from "../../Assets/TechIcons/GitLab.svg";
import Grafana from "../../Assets/TechIcons/Grafana.svg";
import Helm from "../../Assets/TechIcons/Helm.svg";
import Jenkins from "../../Assets/TechIcons/Jenkins.svg";
import Jira from "../../Assets/TechIcons/Jira.svg";
import Linux from "../../Assets/TechIcons/Linux.svg";
import NGINX from "../../Assets/TechIcons/NGINX.svg";
import Prometheus from "../../Assets/TechIcons/Prometheus.svg";
import Terraform from "../../Assets/TechIcons/Terraform.svg";
import Vim from "../../Assets/TechIcons/Vim.svg";
import YAML from "../../Assets/TechIcons/YAML.svg";
import Compose from "../../Assets/TechIcons/Compose.svg";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Compose} alt="compose" />
        <div className="tech-icons-text">Docker Compose</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Ansible} alt="ansible" />
        <div className="tech-icons-text">Ansible</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ArgoCD} alt="argocd" />
        <div className="tech-icons-text">ArgoCD</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Azure} alt="azure" />
        <div className="tech-icons-text">Azure</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={AzureDevops} alt="azure-devops" />
        <div className="tech-icons-text">Azure DevOps</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Bash} alt="bash" />
        <div className="tech-icons-text">Bash</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={GitLab} alt="gitlab" />
        <div className="tech-icons-text">GitLab</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Grafana} alt="grafana" />
        <div className="tech-icons-text">Grafana</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Helm} alt="helm" />
        <div className="tech-icons-text">Helm</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Jenkins} alt="jenkins" />
        <div className="tech-icons-text">Jenkins</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Jira} alt="jira" />
        <div className="tech-icons-text">Jira</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Linux} alt="linux" />
        <div className="tech-icons-text">Linux</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={NGINX} alt="nginx" />
        <div className="tech-icons-text">NGINX</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Prometheus} alt="prometheus" />
        <div className="tech-icons-text">Prometheus</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Terraform} alt="terraform" />
        <div className="tech-icons-text">Terraform</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Vim} alt="vim" />
        <div className="tech-icons-text">Vim</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={YAML} alt="yaml" />
        <div className="tech-icons-text">YAML</div>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <img src={Kubernates} alt="kubernetes" />
        <div className="tech-icons-text">Kubernetes</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Go} alt="go" />
        <div className="tech-icons-text">Go</div>
      </Col>
       
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>

      
    </Row>
  );
}

export default Techstack;
