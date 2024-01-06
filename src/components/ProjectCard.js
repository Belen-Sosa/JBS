import { Col } from "react-bootstrap";

import Button from 'react-bootstrap/Button';

export const ProjectCard = ({ title, description,tools, imgUrl,github }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p >{tools}</p>
          <Button target="_blank" variant="dark"  href={github}>
            github      
      </Button>
        </div>
      </div>
    </Col>
  )
}