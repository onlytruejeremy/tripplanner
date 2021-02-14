import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import MapPic from "../../assets/map.jpg";
import Travel1 from "../../assets/travle1.jpg";
import ArcLogo from "../../assets/arclogo.png";
import Html5 from "../../assets/html5.png";
import JSLogo from "../../assets/js-logo.png";
import MongoDb from "../../assets/mongodb.png";
import ReactLogo from "../../assets/react.png";
import "./Home.css";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
const Home = (props) => {
  return (
    <>
      <Layout>
        <div class="jumbotron jumbotron-fluid bg-dark text-info">
          <div class="container d-flex flex-column justify-content-center align-items-center pt-5 pb-5">
            <h1 class="display-4 text-light">Travel Planner</h1>
            <p className="lead mt-3 mb-3">
              Elevate your next trip to the highest level and share the memories
              you create with those you care about.
            </p>
            <Link className="btn btn-outline-info p-2 mt-3" to="trips/new">
              Start Planning
            </Link>
          </div>
        </div>
        <div
          style={{ minHeight: "100vh" }}
          className="d-flex align-items-center m-auto"
        >
          <Container className="fluid w-75 mt-5 mb-5">
            <Row className="m-5">
              <Col className="col-xl-12 col-lg-12">
                <div className="image__container">
                  <div>
                    <img className="left__image" src={MapPic} alt="map" />
                  </div>
                  <div>
                    <img className="right__image" src={Travel1} alt="map" />
                  </div>
                </div>
              </Col>
            </Row>
            <Row lassName="m-5">
              <Col className="col-xl-12 col-lg-12 col-md-12 text-center">
                <div className="h2 mb-4">Plan, Create and Share</div>
                <p className="mb-4 lead">
                  Our trip planner let's you easily plan out your next journey.
                  Once you have a plan in place and you've embarked on your
                  journey you can begin uploading photos and thoughts about your
                  trip which are easily sharable with friends and family.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="w-100 bg-info p-1 mt-5">
          <Container>
            <Row className="mt-5 mb-5">
              <Col className="col-xl-12 col-lg-12 col-md-12  m-auto tech__col">
                <div className="h2 text-light">Tech</div>
                <div className="image__bar d-flex flex-row m-auto">
                  <img src={ReactLogo} alt="map" />
                  <img src={Html5} alt="map" />
                  <img src={JSLogo} alt="map" />
                  <img src={MongoDb} alt="map" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div
          className="w-100 p-1 mb-5 d-flex align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <Container>
            <div className="h2 mt-5 mb-4">Deeper Dive Into Tech</div>
            <div className="home__grid text-justify">
              <div className="grid__item">
                <h3 className="mt-3 mb-3">Front-End</h3>
                <p className="lead">
                  The front end of this application is built using ReactJS,
                  Axios, ArcGIS, Formik, Yup and React Bootstrap.
                </p>
              </div>
              <div className="grid__item">
                <h3 className="mt-3 mb-3">Middle-Tier</h3>
                <p className="lead">
                  The server side of this application is built in NodeJS with
                  Express, Helmet, CORS, Mongoose, JWT, BCRYPT and Joi.
                </p>
              </div>
              <div className="grid__item">
                <h3 className="mt-3 mb-3">Back-End</h3>
                <p className="lead">
                  The database chosen for this project is MongoDB.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default Home;
