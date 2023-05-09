import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'

export default class AddContactForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            gen: ""
        }
    }
    handleChange = (e) =>{
        e.preventDefault();
        this.setState({
        [e.target.name] : e.target.value
        })
       
    }
  render() {
    return (
      <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" onChange={this.handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Gen</Form.Label>
        <Form.Control type="number" placeholder="Gen" name="gen" onChange={this.handleChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>
    )
  }
}
