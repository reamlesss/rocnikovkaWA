import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./forms.css";

function LogRegForm() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      <div className={showLogin ? "login" : "hide"}>
        <h1 className="header">Login</h1>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3 input"
        >
          <Form.Control
            type="email"
            placeholder="n
            \ame@example.com"
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

        <div className="button-group">
          <Button variant="success" className="submit-button">
            Login
          </Button>
          <Button
            variant="success"
            className="register-button"
            onClick={toggleForm}
          >
            Register
          </Button>
        </div>
      </div>

      {/* register form */}

      <div className={showLogin ? "hide" : "register"}>
        <h1 className="header">Register</h1>
        <FloatingLabel
          controlId="floatingInput"
          label="Username"
          className="mb-3 input"
        >
          <Form.Control type="text" placeholder="john doe" className="input" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3 input"
        >
          <Form.Control
            type="email"
            placeholder="n
            \ame@example.com"
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
        <div className="button-group">
          <Button variant="success" className="register-button">
            Register
          </Button>
          <Button
            variant="success"
            className="submit-button"
            onClick={toggleForm}
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
}

export default LogRegForm;
