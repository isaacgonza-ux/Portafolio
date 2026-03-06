import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import landing from "../assets/img/landing.png";
import ecommerce from "../assets/img/ecommerce.png";
import gym from "../assets/img/gym.png";
import appandroid from "../assets/img/appandroid.png";
import auth from "../assets/img/auth.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "LandingPage Corporativa",
      description: "Diseñada e implementada para empresa de seguridad. Interfaz responsiva en React con integración de EmailJS para gestión automatizada de contacto.",
      imgUrl:landing ,
      link:"https://ksasecurity.cl"
    },
    {
      title: "Ecommerce de videojuegos",
      description: "Plataforma de venta de videojuegos digitales. Hecha con React, ademas se uso bootstrap y cuenta con una interfaz responsiva, cuenta tambien con un backend hecho en java con spring boot y mysql. (La versión desplegada solo es frontend.)",
      imgUrl: ecommerce,
      link:"https://tiendareactvideojuegos.pages.dev"
    },
    {
      title: "App Android de E-commerce",
      description: "Aplicación nativa en Kotlin con consumo de API REST. Conectada a un backend propio (Java/Spring Boot) y ademas consume una Api pública para mostrar catalogo de videojuegos.",
      imgUrl: appandroid,
      link:"https://github.com/isaacgonza-ux/app_videojuegos"
    },
    {
      title: "Software de gestión",
      description: "Sistema de escritorio para la gestión de clientes en gimnasios. Interfaz gráfica desarrollada en Java Swing con persistencia en MySQL.",
      imgUrl: gym,
      link:"https://github.com/isaacgonza-ux/Gimnasio-"
    },
    {
      title: "Api Rest autenticación",
      description: "Microservicio backend para gestión de identidades y roles. Implementa autenticación segura con Spring Security, soportado por bases de datos relacionales (MySQL/Oracle).",
      imgUrl: auth,
      link:"https://github.com/isaacgonza-ux/Autenticacion/tree/version-2"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      link:""
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}