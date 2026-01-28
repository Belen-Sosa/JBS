import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const WorkExperiencie = () => {
  const works = [
    {
      title: "Desarrolladora Front-End",
      date: "Noviembre 2024 - Actualidad",
      description:
        "Desarrollo y mantenimiento de páginas web internas y externas de la empresa. Implementación de nuevas funcionalidades y optimización de las existentes.",
      responsibilities: [
        "Integración con APIs para el consumo de datos.",
        "Desarrollo de componentes reutilizables en ReactJS.",
        "Implementación de WebSocket para actualizaciones en tiempo real.",
        "Manejo de JWT para autenticación y autorización de usuarios.",
        "Uso de Git y GitHub para control de versiones y trabajo en equipo.",
      ],
      tools:
        "HTML, CSS, Bootstrap, JavaScript, ReactJS, WebSocket, Axios, JWT, Git, GitHub",
      extras:
        "He trabajado en proyectos pequeños con React Native para aplicaciones móviles.",
    },
  ];

  return (
    <section className=" bg-black " id="works">
      <Container > 
        <Row className="mb-4">
          <Col>
            <h2 className="text-center">Experiencia laboral</h2>
          </Col>
        </Row>

        <Row >
          <Col>
            {works.map((work, index) => (
              <Card
                key={index}
                className="mb-4 shadow-sm  rounded  text-white "
                style={{ borderRadius: "12px" ,  backgroundColor: "#151515", }}
              >
                <Card.Body>
                  <div className="d-flex flex-column flex-md-row justify-content-between mb-2">
                    <Card.Title className="mb-1">
                      {work.title}
                    </Card.Title>
                    <span className="text-muted">{work.date}</span>
                  </div>

                  <Card.Text>{work.description}</Card.Text>

                  <h6 className="mt-3">Responsabilidades</h6>
                  <ul className="mb-3">
                    {work.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>

                  <p className="mb-2">
                    <p>Herramientas y tecnologías:</p>
                    <br />
                    <strong className="font-bold">{work.tools}</strong>
                  </p>

                  {work.extras && (
                    <p className="mb-0">
                      <strong>Extras:</strong> {work.extras}
                    </p>
                  )}
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorkExperiencie;
