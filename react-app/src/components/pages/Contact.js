import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import logo from '../assets/IMG_0101.jpeg'

export default function Contact() {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2>Contact Information</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "250px" }}
            src={logo}
            class="pr-4 pb-3 img-fluid"
            alt="Tayor Garrey"
          />
        
        <p style={{ fontSize: "27px" }}>
            Feel free to contact me with anything you need !
          </p>
          <h3>Cell Phone</h3>
          
          <a href="tel:480-322-2698">
            <MDBIcon icon="phone-alt" /> 480-322-2698
          </a>
          
          <h3>E-mail</h3>
          
          <a href="mailto:tpopp0303@gmail.com">
            <MDBIcon icon="envelope" /> tpopp0303@gmail.com
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export {Contact};
