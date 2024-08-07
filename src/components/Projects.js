import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.JPG";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';


export const Projects = () => {

  const projects = [
    {
      title: "Sistema de Gestion",
      description: "Sistema de gestion para un mercado multirubro.",
      tools: "HTML, CSS, BOOTSTRAP,JS,JQUERY,AJAX,MYSQL ",
      imgUrl: projImg1,
      github: "https://github.com/Belen-Sosa/sistemaGestion"

    },
    {
      title: "JBS",
      description: "Pagina personal.",
      tools: "HTML | CSS | BOOTSTRAP | REACTJS ",
      imgUrl: projImg2,
      github: "https://github.com/Belen-Sosa/JBS"

    }
    ,
    {
      title: "SEE",
      description: "Sistema de Encuestas y Estadisticas.",
      tools: "Laravel | Laravel Jetstream | Inertia | Spatie | Vue3 | Pinia | Vue-Icons | JavaScript | Tailwind CSS | CSS | JsPDF | html2canvas | MySql| Patron MVC |...",
      imgUrl: projImg3,
      github: "https://github.com/Belen-Sosa/JBS"

    }
   
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
        
              <div >
                <h2>Proyectos</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">pag 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">pag 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">pag3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row >
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard  
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>proximamente...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>proximamente...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}