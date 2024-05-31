import { Button, Form } from "react-bootstrap";

export default function B3() {
  return (
    <>
    <Form>
        <h3>Login account</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your email</Form.Label>
            <Form.Control style={{width:'300px'}} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control style={{width:'300px'}} type="password" placeholder="Password" />
        </Form.Group>
        <Button style={{width:'300px'}} variant="primary" type="submit">
            Login an account
        </Button>
    </Form>
    </>
  )
}
