import { Button, Form } from 'react-bootstrap'

export default function B4() {
  return (
    <>
    <Form>
        <h3>Create account</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your email</Form.Label>
            <Form.Control style={{width:'300px'}} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control style={{width:'300px'}} type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control style={{width:'300px'}} type="confrimpassword" placeholder="confirmPassword" />
        </Form.Group>

        <Button style={{width:'300px'}} variant="primary" type="submit">
            Create an account
        </Button>
    </Form>
    </>
  )
}
