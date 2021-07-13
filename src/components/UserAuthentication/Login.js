import React, { useRef, useState } from 'react';
import { Button, Card, Form, Alert, Container } from 'react-bootstrap';
import { useAuth } from "./AuthContext";
import HelloSuperStarDemo from "./HelloSuperStarDemo";
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
          const emailRef = useRef();
          const passwordRef = useRef();
          const { login } = useAuth();
          const history = useHistory();

          const [error, setError] = useState("");
          const [loading, setLoading] = useState(false);

          const handleSubmit = async (e) => {
                    e.preventDefault();

                    try {
                              setLoading(true);
                              setError("");
                              await login(emailRef.current.value, passwordRef.current.value);
                              history.push('/');
                    } catch (error) {
                              setError(error);
                    }
                    setLoading(false);
          }

          return (
                    <>
                              <div className="LoginSignup">
                                        <section id="header" className="d-flex align-items-center">
                                                  <div className="container-fluid">
                                                            <div className="row">
                                                                      <div className="col-10 mx-auto">
                                                                                <div className="row">
                                                                                          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                                                                                    <div className="mt-3">
                                                                                                              <HelloSuperStarDemo />
                                                                                                    </div>
                                                                                          </div>

                                                                                          <div className="col-lg-6 order-1 order-lg-2 header-img">
                                                                                                    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                                                                                                              <div className="w-100" style={{ maxWidth: "400px" }}>
                                                                                                                        <Card>
                                                                                                                                  <Card.Body>
                                                                                                                                            <h2 className="text-center mb-4"> Log In</h2>
                                                                                                                                            {error ? <Alert variant="danger">{JSON.stringify(error)}</Alert> : ""}
                                                                                                                                            <Form onSubmit={handleSubmit}>
                                                                                                                                                      <Form.Group id="email">
                                                                                                                                                                <Form.Label>Email</Form.Label>
                                                                                                                                                                <Form.Control ref={emailRef} type="email" required />
                                                                                                                                                      </Form.Group>

                                                                                                                                                      <Form.Group id="password">
                                                                                                                                                                <Form.Label>Password</Form.Label>
                                                                                                                                                                <Form.Control ref={passwordRef} type="password" required />
                                                                                                                                                      </Form.Group>
                                                                                                                                                      <br />
                                                                                                                                                      <Button disabled={loading} className="w-100" type="submit">Log In</Button>
                                                                                                                                            </Form>
                                                                                                                                  </Card.Body>
                                                                                                                        </Card>
                                                                                                                        <div className="w-100 text-center mt-2">
                                                                                                                                  Don't have an account? <Link to="/signup">Sign Up!</Link>
                                                                                                                        </div>
                                                                                                              </div>
                                                                                                    </Container>
                                                                                          </div>
                                                                                </div>
                                                                      </div>
                                                            </div>
                                                  </div>
                                        </section>
                              </div>
                    </>
          )
}

export default Login;