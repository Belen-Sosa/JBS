import meter_php from "../assets/img/meter-php.png";
import meter_js from "../assets/img/meter-js.png";
import meter_html from "../assets/img/meter-html.png";
import meter_jquery from "../assets/img/meter-jquery.png";
import meter_mysql from "../assets/img/meter-mysql.webp";
import meter_react from "../assets/img/meter-reactjs.jpg";
import meter_css from "../assets/img/meter-css.png";
import meter_laravel from "../assets/img/meter-laravel.jpg";
import meter_vue from "../assets/img/meter-vue.png";
import meter_github from "../assets/img/meter-git.jpg";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

import { Container, Row, Col } from 'react-bootstrap';
import React from "react";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
  
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Habilidades</h2>
              <p>
                Poseo paciencia y habilidad para abordar problemas
                con soluciones innovadoras, respaldado por una
                comunicación efectiva y una colaboración activa , 
                asegurando un enfoque integral y exitoso en cada
                proyecto.
              </p>
         
               
      
            <React.Fragment >
              <div className="skills-img">
              <Row className="mb-4">
              <Col sm={3}>
              <div className="">
                  <img src={meter_php} className="img"alt="Image" />
                  <h3>PHP</h3>
                </div>
               
              </Col>
              <Col sm={3}>
              <div className="item">
                  <img src={meter_js} className="img" alt="Image" />
                  <h3>JAVASCRIPT</h3>
                </div>
               
              </Col>
              <Col sm={3}>
              <div className="item">
                  <img src={meter_laravel} className="img" alt="Image" />
                  <h3>LARAVEL</h3>
                </div>
               
              </Col>
              <Col sm={3}>
              <div className="item">
                  <img src={meter_vue} className="img" alt="Image" />
                  <h3>Vue3</h3>
                </div>
               
              </Col>
             
              </Row>
              <Row className="mb-4">
              <Col sm={3}>
                 <div className="item">
                  <img src={meter_html}  className="img" alt="Image" />
                  <h3>HTML5</h3>
                </div>
               
              </Col>
              <Col sm={3}>
             
              <div className="item">
                  <img src={meter_css}  className="img" alt="Image" />
                  <h3>CSS</h3>
                </div>
               
              </Col>
              <Col sm={3}>
              <div className="item">
                  <img src={meter_mysql}   className="img"alt="Image" />
                  <h3>MYSQL</h3>
                </div>
              </Col>
              <Col sm={3}>
              
              <div className="item">
                  <img src={meter_github} className="img" alt="Image" />
                  <h3>Git/GitHub</h3>
                </div>
               
              </Col>
              </Row>
              
              <Row className="mb-4"> 
              <Col sm={3}>
              <div className="item">
                  <img src={meter_jquery}  className="img" alt="Image" />
                  <h3>JQUERY</h3>
                </div>
               
              </Col>
              <Col sm={3}>
              <div className="item">
                  <img src={meter_react}   className="img" alt="Image" />
                  <h3>REACTJS</h3>
                </div>
               
              </Col>
              </Row>
              </div>

            </React.Fragment>
     
     




            
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
