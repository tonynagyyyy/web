import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className="bg-dark navbar-dark py-3">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3">
          MY PORTOFOLYO
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              href="#home"
              className={activeLink === "home" ? "active navbar-link px-3" : "navbar-link px-3"}
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="#skills"
              className={activeLink === "skills" ? "active navbar-link px-3" : "navbar-link px-3"}
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>

            <Nav.Link
              href="#projects"
              className={activeLink === "projects" ? "active navbar-link px-3" : "navbar-link px-3"}
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>

            <div className="social-icon d-flex ms-lg-4 my-3 my-lg-0">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="me-2">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="FB" width="50" />
              </a>
              <a href="https://www.instagram.com" className="me-2">
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="IG" width="50" />
              </a>
              <a href="https://www.linkedin.com/">
                <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="IN" width="50" />
              </a>
            </div>

            <button className="connect-btn ms-lg-3" onClick={() => console.log("pressed")}>
              <span>CONNECT US</span>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;