import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/EditInfo.css";
import "../css/ChangePassword.css";

const Editprofile = () => {
  return (
    <div className="mainDiv2">
      <div className="cardStyle2">
        <div className="edit-icon">
          <h3 className="dash-head">Edit Information</h3>
          <i className="fa-solid fa-pen-to-square"
          style = {{ 
            fontSize:'30px',
            padding:'0px 15px',
            borderRadius:'6px',
            cursor:'Pointer'
            }}></i>
        </div>

        <Form className="read">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="label">First Name</Form.Label>
              <Form.Control className="value" type="text" placeholder="Mohit" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="label">Last Name</Form.Label>
              <Form.Control
                className="value"
                type="text"
                placeholder="Chauhan"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label className="label">Address</Form.Label>
            <Form.Control
              style={{ width: "88%" }}
              as="textarea"
              type="text"
              className="value"
              placeholder="177 A Bleaker street, New York"
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="label">City</Form.Label>
              <Form.Control
                className="value"
                type="text"
                placeholder="New York"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="label">Pincode</Form.Label>
              <Form.Control className="value" type="text" placeholder="U.S.A" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label className="label">Contact Number</Form.Label>
              <Form.Control
                className="value"
                type="text"
                placeholder="123456789"
              />
            </Form.Group>
          </Row>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label className="label">Profile Picture</Form.Label>
            <Form.Control
              type="file"
              className="value"
              style={{ width: "80%" }}
            />
          </Form.Group>

          <Link to="/Buyerdash/Personalinfo">
            {" "}
            <button
              type="submit"
              style={{ fontSize: "18px" }}
              onclick="validateSignupForm()"
              className="submitButton2"
            >
              <span>Edit Profile</span>
            </button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Editprofile;
