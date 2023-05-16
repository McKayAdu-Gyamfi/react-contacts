import React, { useState } from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import EditContactForm from "./EditContactForm";

const Contact = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteContact(props.contactInfo.id);
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContactForm
            contactInfo={props.contactInfo}
            editContact={props.editContact}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>

      <Col md="4" style={{ marginBottom: "1rem" }}>
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
            <Card.Link href="#">
              <Button size="sm" onClick={handleShow}>
                Update
              </Button>
            </Card.Link>
            <Card.Link href="#">
              <Button variant="danger" size="sm" onClick={handleDelete}>
                Delete
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};
export default Contact;
