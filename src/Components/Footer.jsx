import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-dark text-light py-4 mt-5'>
      <Container>
        <Row className='d-flex justify-content-center'>
          
          <Col lg={3} className='text-center mb-3'>
            <h4 className='text-info'>Awsome Recipe's</h4>
            <p>Your go-to app for delicious and easy-to-make recipes!</p>
          </Col>

         
          <Col lg={3} className='text-center mb-3'>
            <h5 className='text-info'>Quick Links</h5>
            <ul className='list-unstyled'>
              <li><a href='/' className='text-light'>Home</a></li>
              <li><a href='/about' className='text-light'>About Us</a></li>
              <li><a href='/contact' className='text-light'>Contact</a></li>
              <li><a href='/faq' className='text-light'>FAQ</a></li>
            </ul>
          </Col>

          
          <Col lg={3} className='text-center mb-3'>
            <h5 className='text-info'>Follow Us</h5>
            <div className='d-flex justify-content-center gap-3'>
              <a href="https://facebook.com" className='text-light'><FaFacebook size={30} /></a>
              <a href="https://instagram.com" className='text-light'><FaInstagram size={30} /></a>
              <a href="https://twitter.com" className='text-light'><FaTwitter size={30} /></a>
              <a href="https://linkedin.com" className='text-light'><FaLinkedin size={30} /></a>
            </div>
          </Col>
        </Row>

        
        <Row className='text-center mt-4'>
          <Col>
            <p>&copy; {new Date().getFullYear()} Awsome Recipe's. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
