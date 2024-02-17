import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="items-center justify-between">
        <Col md="4" className="footer-body">
          <ul className="flex justify-center items-center list-none">
            <li className="mr-4">
              <a
                href="https://github.com/Karthikvanabhojana1"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="mr-4">
              <a
                href="https://twitter.com/home"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="mr-4">
              <a
                href="https://www.linkedin.com/in/karthik-vanabhojana/"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/karthikvanabhojana/"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
        <Col md="4" className="footer-body text-white-700 pt-5">
          <ul className="flex justify-center items-center list-none">
            <li className="mr-4">
              <h3>Designed and Developed by Karthik Vanabhojana</h3>
            </li>
            <li>
              <h3>Copyright © {year} SB</h3>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
