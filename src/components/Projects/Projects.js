import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";
import ColorSharp from "./../../assets/img/color-sharp2.png";
import { projects } from "../../consts/projects";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>My small study projects.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey={"first"}>
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey={"first"}>Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={"second"}>Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={"third"}>Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey={"first"}>
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard key={index} {...project}></ProjectCard>
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey={"second"}>*****</Tab.Pane>
                <Tab.Pane eventKey={"third"}>*****</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="bg-img-right" src={ColorSharp} alt="bg-img" />
    </section>
  );
};

export default Projects;
