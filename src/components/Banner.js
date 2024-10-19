import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap"; // Importa el componente Button
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 50);
  const [index, setIndex] = useState(1);
  const toRotate = ["Desarrolladora Web"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  const handleDownload = (e) => {
    // Previene la recarga de la página
    e.preventDefault();
    
    // Verifica que el archivo exista y realiza la descarga
    const link = document.createElement('a');
    link.href = "/JBS/assets/CVSosaJorgelinaBelen.pdf"; 
    link.download = "CV-SosaJorgelinaBelen.pdf";
    link.click();
   
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Bienvenido a mi Portafolio</span>
                  <h1>{`Hola! Soy Belen`}</h1>
                  <h2>
                    <span className="txt-rotate" dataPeriod="1000">
                      <span className="wrap">{text}</span>
                    </span>
                  </h2>
                  <p>
                  Graduada de la carrera de Analista de Sistemas me enfoco en el Desarrollo Web. 
                  Estoy comprometida con el aprendizaje y el crecimiento profesional en el campo del desarrollo.
                  Creativa, resolutiva y lista para contribuir en un entorno laboral que promueva la innovación y el aprendizaje continuo.
                  </p>
               
             
                  <div className="button-container">
                    <a
                      href="#" 
                      className="button-cv" 
                      onClick={handleDownload}
                    >
                      <span>Descargar CV</span>
                    </a>
                  </div>
              
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility></TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
