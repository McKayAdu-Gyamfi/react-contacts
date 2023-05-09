import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import Contacts from './Contacts';
import AddContactForm from './AddContactForm'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: [
        {
          name: "Nana Kay",
          email: "nanakay@gamil.com",
          gen: "24"
        }
      ]
    }
  }
  render(){
 return (
    <div>
      <Container fluid style={{marginTop: "2rem"}}>
        <Row>
          <Col md="4">
            <AddContactForm/>
          </Col>
          <Col md="8">
            <Contacts contactsData={this.state.contacts}/>
          </Col>
        </Row>
      </Container>
    </div>
  );}
}

export default App;
