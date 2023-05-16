import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Contacts from "./Contacts";
import AddContactForm from "./AddContactForm";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          name: "Nana Kay",
          email: "nanakay@gamil.com",
          gen: "24",
          id: uuidv4(),
        },
      ],
    };
  }
  addNewContact = (contact) => {
    contact.id = uuidv4();
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };
  deleteContact = (id) => {
    let undeletedContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({
      contacts: undeletedContacts,
    });
  };
  editContact = (id, updatedContact) => {
    this.setState({
      contacts: this.state.contacts.map((contact) =>
        contact.id === id ? updatedContact : contact
      ),
    });
  };
  render() {
    return (
      <div>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
            <h4>Add Contacts</h4>
            <hr/>
              <AddContactForm addContact={this.addNewContact} />
            </Col>
            <Col md="8">
            <h4>All Contacts</h4>
            <hr/>
              <Contacts
                contactsData={this.state.contacts}
                deleteContact={this.deleteContact}
                editContact={this.editContact}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
