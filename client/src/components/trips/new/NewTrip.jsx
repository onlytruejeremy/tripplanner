import React from "react";
import Layout from "../../Layout/Layout";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import NewStop from "./NewStop";
import * as Yup from "yup";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = Yup.object().shape({
  tripName: Yup.string()
    .min(5, "Minimum of 5 characters")
    .max(30, "Max of 30 characters")
    .required("Trip Name Is Required"),
});
class NewTrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stops: [],
      showButtons: false,
      stopCounter: 0,
    };
  }

  addStop = (e) => {
    e.preventDefault();
    let id = Math.random();
    this.setState((curr) => {
      return {
        ...curr,
        stops: [
          ...this.state.stops,
          <NewStop
            key={id}
            id={id}
            addStop={this.addToStops}
            remove={this.removeStop}
          />,
        ],
      };
    });
  };
  removeStop = (id) => {
    toast.info(id);
    let newState = [...this.state.stops];
    const index = newState.findIndex((item) => item.props.id === id);
    newState.splice(index, 1);
    toast.info(JSON.stringify(newState));
    this.setState((curr) => {
      return {
        ...curr,
        stops: newState.length > 0 ? newState : [],
        stopCounter: this.state.stopCount - 1,
      };
    });
  };

  submitForm = (values, { resetForm }) => {
    //initialize the state inside the context using the reducer
    this.setState((curr) => {
      return {
        ...curr,
        showButtons: !this.state.showButtons,
      };
    });
  };

  saveTrip = (e) => {
    e.preventDefault();
    if (this.state.stops.length === this.state.stopCounter) {
      toast.success("Trip Saved");
    } else {
      toast.error("Add Some Stops Or Save Stops");
    }
  };
  addToStops = () => {
    // add information to context api
    this.setState((curr) => {
      return {
        ...curr,
        stopCounter: this.state.stopCounter + 1,
      };
    });
  };
  render() {
    return (
      <Layout>
        <Container style={{ minHeight: "50vh" }}>
          <Row className="m-5">
            <Col className="text-justify">
              <Formik
                initialValues={{ tripName: "" }}
                validationSchema={validationSchema}
                onSubmit={this.submitForm}
                enableReinitialize={true}
              >
                {({
                  touched,
                  errors,
                  isSubmitting,
                  values,
                  handleSubmit,
                  isValid,
                  handleChange,
                }) => (
                  <Form>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Control
                        name="tripName"
                        value={values.tripName}
                        type="text"
                        placeholder="Trip Name"
                        onChange={handleChange}
                      />
                      <Form.Label>Trip Name</Form.Label>
                      {errors.tripName && touched.tripName && (
                        <span className="bg-danger">{errors.tripName}</span>
                      )}
                    </Form.Group>

                    {this.state.showButtons ? (
                      <>
                        <Button
                          variant="info m-1"
                          type="submit"
                          onClick={this.addStop}
                        >
                          Add Stop
                        </Button>
                        <Button
                          type="submit"
                          onClick={this.saveTrip}
                          variant="success m-1"
                          type="submit"
                        >
                          Finish
                        </Button>
                      </>
                    ) : (
                      <Button
                        onClick={handleSubmit}
                        variant="info m-1 btn-small"
                        type="submit"
                      >
                        Start Trip
                      </Button>
                    )}
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-6 offset-3">
              {this.state.stops && this.state.stops.map((item) => item)}
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Layout>
    );
  }
}

export default NewTrip;
