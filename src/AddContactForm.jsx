import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap';
import { v4 as uuidv4 } from "uuid";


class AddContactForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            gen: "",
            id: uuidv4(),
        }
    }
    handleChange = (e) =>{
        e.preventDefault();
        this.setState({
        [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) =>{
      e.preventDefault();
      this.props.addContact(this.state);
      this.setState({
        name: "",
        email: "",
        gen: "",
        id: uuidv4(),
      })
    }
  render() {
    return (
      <div>
      <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gen</Form.Label>
        <Form.Control type="number" placeholder="Gen" name="gen" value={this.state.gen} onChange={this.handleChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>
    )
  }
}
export default AddContactForm;