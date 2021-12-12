import React from 'react';
import { Form, Button } from 'react-bootstrap';
const ContactMe = () => {
  return (

    <div className="row container mt-5">
      <h2 className="text-white text-center ">Contact Me</h2>
      <div className="col-lg-6 col-sm-12 my-5">

        <div  >
          <img style={{ width: '100%' }} src="https://1.bp.blogspot.com/-COpQWfWKqyc/YI1lbCIig5I/AAAAAAAACEc/q45NwMpWHFY8zvBfAJB_MqBE8zZqt7jugCLcBGAsYHQ/s600/contact-us.gif" alt="" />
        </div>

      </div>
      <div className="col-lg-6 col-sm-12 my-4 ">





        <Form action="https://formsubmit.co/anamikaanuctg@gmail.com" method="POST" className="">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="Number" placeholder="phone Number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

    </div>


  );
};

export default ContactMe;