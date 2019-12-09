import React from "react";
import "./EmployeeForm.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const EmployeeForm = () => {
  return (
    <div className="candidate-form">
      <h2> Please enter the form details</h2>
      <Form>
        <Form.Group controlId="formName" autocomplete="off">
          <Form.Label>Candidate name</Form.Label>
          <Form.Control type="string" placeholder="Enter name" />
        </Form.Group>

        <Form.Group controlId="">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="integer" placeholder="Enter mobile number" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formDate">
          <Form.Label>Date of birth</Form.Label>
          <Form.Control type="Date" placeholder="Enter DOB" />
        </Form.Group>

        <Form.Group controlId="formExperience">
          <Form.Label>Job experience</Form.Label>
          <Form.Control type="integer" placeholder="Enter in months" />
        </Form.Group>

        <Form.Group controlId="formOldComany">
          <Form.Label>Previous company name</Form.Label>
          <Form.Control
            type="string"
            placeholder="Name of the previous company"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
