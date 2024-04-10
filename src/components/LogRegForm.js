import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./forms.css";

function LogRegForm() {
  return (
    <>
      <div className="login">
        <h1 className="header">Login</h1>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3 input"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            className="input"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            className="input"
          />
        </FloatingLabel>
        <Button variant="success" className="submit-button">
          Login
        </Button>
        <Button variant="success" className="register-button">
          Register
        </Button>
      </div>
    </>
  );
}

export default LogRegForm;
