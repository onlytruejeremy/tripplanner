import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar bg="info" expand="lg" className="border-light border-bottom">
        <Link to="/">
          <Navbar.Brand className="text-light">Travel Planner</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className="nav-link text-light">
              Home
            </Link>
            <NavDropdown
              title={<span className="text-light">Trips</span>}
              id="basic-nav-dropdown"
            >
              <Link to="/trips/new" className="dropdown-item text-center">
                New
              </Link>
              <Link to="/trips/existing" className="dropdown-item text-center">
                Existing
              </Link>
            </NavDropdown>
            <Link to="/account" className="nav-link text-light">
              Account
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
