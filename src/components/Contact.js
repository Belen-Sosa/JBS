import { useState,useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from '@emailjs/browser';


export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
   
  }
  const refForm= useRef();

  const handleSubmit = async (e) => {

    e.preventDefault();
    setButtonText("Enviando...");
    const service_id= "contact-portfolio-detail";
    const template_id= "template_wwjqr1a";
    const apikey=  "DuA5ZaY3PnirfeV5s";

    
    emailjs.sendForm(service_id,template_id,refForm.current,apikey)
    .then(result =>   setStatus({ succes: true, message: 'Mensaje enviado con exito!.'}))
    .catch(error=> setStatus({ succes: false, message: 'Algo salio mal,por favor intenta mas tarde.'}))
     
    
    
    setButtonText("Enviar");
    
    setFormDetails(formInitialDetails);

    
   
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
        
                <img  src={contactImg} alt="Contact Us"/>
              
          
          </Col>
          <Col size={12} md={6}>
            
                <div>
                <h2>Pongamonos en contacto</h2>
                <form  ref={refForm}onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="first_name"value={formDetails.firstName} placeholder="Nombre" onChange={(e) => onFormUpdate('firstName', e.target.value)} required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  name="last_name"value={formDetails.lasttName} placeholder="Apellido" onChange={(e) => onFormUpdate('lastName', e.target.value)} required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="phone" value={formDetails.phone} placeholder="Telefono" onChange={(e) => onFormUpdate('phone', e.target.value)} required/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="messaje" value={formDetails.message} placeholder="Mensaje" onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}