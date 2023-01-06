import { Col } from "react-bootstrap";

interface ProjectCardProp {
  title: string;
  description: string;
  imgUrl: string

}

export const ProjectCard: React.FC<ProjectCardProp> = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}