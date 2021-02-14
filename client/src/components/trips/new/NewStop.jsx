import React from "react";
import { Button, Card, Collapse, Fade, Form, Row } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const NewStop = (props) => {
  const validationSchema = Yup.object().shape({
    addrOne: Yup.string()
      .min(4, "Address Must Be At Least 4 Characters")
      .max(50, "Address Cannot Exceed 50 Characters")
      .required("Address Is Required"),
    addrTwo: Yup.string()
      .min(4, "Address Must Be At Least 4 Characters")
      .max(50, "Address Cannot Exceed 50 Characters"),
    country: Yup.string()
      .min(4, "Country Must Be At Least 4 Characters")
      .max(40, "Country Cannot Exceed 40 Characters")
      .required(),
    state: Yup.string()
      .min(2, "State Must Be At Least 2 Characters")
      .max(30, "State Cannot Exceed 30 Characters")
      .required(),
    zip: Yup.string()
      .min(5, "Zip Must Be At Least 5 Characters")
      .max(5, "Zip Cannot Exceed 5 Characters")
      .required(),
  });
  const handleSubmit = (values) => {
    toast.info("Added Address");
    setBtnDisable(!btnDisable);
    props.addStop();
  };
  const addressVal = useFormik({
    initialValues: {
      addrOne: "",
      addrTwo: "",
      country: "",
      state: "",
      zip: "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: handleSubmit,
  });
  const [btnDisable, setBtnDisable] = React.useState(false);
  const removeStop = (e) => {
    e.preventDefault();

    props.remove(props.id);
  };

  return (
    <>
      <Row className="mt-5 mb-5">
        <Card className="bg-info text-justify shadow">
          <Card.Header className="bg-light">
            <h4>Stop</h4>
          </Card.Header>
          <Card.Body>
            <Form>
              <div className="p-1">
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    name="addrOne"
                    value={addressVal.values.addrOne}
                    onChange={addressVal.handleChange}
                    type="text"
                    placeholder="Line One"
                  />
                  <Form.Label>
                    {addressVal.errors.addrOne ? (
                      <span className="text-danger">
                        {addressVal.errors.addrOne}
                      </span>
                    ) : (
                      "Line One"
                    )}
                  </Form.Label>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    name="addrTwo"
                    value={addressVal.values.addrTwo}
                    onChange={addressVal.handleChange}
                    type="text"
                    placeholder="Line Two"
                  />
                  <Form.Label>
                    {addressVal.errors.addrTwo ? (
                      <span className="text-danger">
                        {addressVal.errors.addrTwo}
                      </span>
                    ) : (
                      "Line Two (Optional)"
                    )}
                  </Form.Label>
                </Form.Group>
                <div className="d-flex flex-row justify-content-between">
                  <Form.Group className="p-1" controlId="formBasicPassword">
                    <Form.Control
                      name="country"
                      value={addressVal.values.country}
                      onChange={addressVal.handleChange}
                      type="text"
                      placeholder="Country"
                    />
                    <Form.Label>
                      {addressVal.errors.country ? (
                        <span className="text-danger">
                          {addressVal.errors.country}
                        </span>
                      ) : (
                        "Country"
                      )}
                    </Form.Label>
                  </Form.Group>
                  <Form.Group className="p-1" controlId="formBasicPassword">
                    <Form.Control
                      name="state"
                      value={addressVal.values.state}
                      onChange={addressVal.handleChange}
                      type="text"
                      placeholder="State"
                    />
                    <Form.Label>
                      {addressVal.errors.state ? (
                        <span className="text-danger">
                          {addressVal.errors.state}
                        </span>
                      ) : (
                        "State"
                      )}
                    </Form.Label>
                  </Form.Group>
                  <Form.Group className="p-1" controlId="formBasicPassword">
                    <Form.Control
                      name="zip"
                      value={addressVal.values.zip}
                      onChange={addressVal.handleChange}
                      type="text"
                      placeholder="Zip"
                    />
                    <Form.Label>
                      {addressVal.errors.zip ? (
                        <span className="text-danger">
                          {addressVal.errors.zip}
                        </span>
                      ) : (
                        "Zip"
                      )}
                    </Form.Label>
                  </Form.Group>
                </div>
              </div>
            </Form>
            <ToastContainer />
          </Card.Body>
          <Card.Footer className="bg-light">
            <Button
              onClick={addressVal.handleSubmit}
              type="submit"
              variant="outline-primary m-1"
              disabled={btnDisable}
            >
              Add Stop
            </Button>
            <Button variant="outline-danger m-1" onClick={removeStop}>
              Remove
            </Button>
          </Card.Footer>
        </Card>
      </Row>
    </>
  );
};

export default NewStop;
