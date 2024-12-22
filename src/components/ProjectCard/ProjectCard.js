import { Col } from "react-bootstrap";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="project-img-box">
        <img src={imgUrl} alt="project-img" />
        <div className="project-text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
