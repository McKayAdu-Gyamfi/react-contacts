import React from "react";
import {Card, Col} from 'react-bootstrap'

const Contact = (props) => {
  return (
    <Col md="4">
      <Card>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            Contact List
          </Card.Subtitle>
          <Card.Title>{props.contactInfo.name}</Card.Title>
          <Card.Text>
            <p>Email: {props.contactInfo.email}</p>
            <p>Gen: {props.contactInfo.gen}</p>
          </Card.Text>
          <Card.Link href="#">Edit</Card.Link>
          <Card.Link href="#">Delete</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Contact;
