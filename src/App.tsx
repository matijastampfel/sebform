import React, { useState } from "react";
import "./App.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function App() {
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [sucessfullLogIn, setSucessfullLogIn] = useState(false);

  const logIn = () => {
    setSucessfullLogIn(true)
    setInput("")
    setPassword("")
    setCheckbox(false)

  }



  return (
    <div className="App">
      <Container className="form-container">
        <Row>
          <Col>
            <Form onSubmit={(e) => {logIn(); e.preventDefault();}}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Log In</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="согласен с офертой"
                  checked={checkbox}
                  onChange={(e) => {
                    setCheckbox(e.target.checked);
                  }}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                disabled={
                  input.length === 0 ||
                  password.length === 0 ||
                  checkbox === false
                    ? true
                    : false
                }
              >
                Отправить
              </Button>
            </Form>
            {sucessfullLogIn && "You have successfully log in"}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
