import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Popup from './Popup';

function Navbar1(props) {
  const { name, profilePic, userClass } = props;
  return (
    <Navbar bg="#464EB8" expand="lg" style={{ backgroundColor: '#464eb8', borderBottom: '2px solid #ccc', padding: '10px 0', width: "100%" }}>
      <Navbar.Brand href="#" style={{ color: '#fff', fontWeight: 'bold', paddingLeft:"20px" }}>SenseiAI</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ color: '#fff', fontWeight: 'bold' }}>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
        <Nav.Link href="#">
            <img
              src={profilePic}
              alt="Profile Pic"
              className="rounded-circle ml-2"
              width="30"
              style={{ border: '2px solid #ccc' }}
            />
          </Nav.Link>
          <Navbar.Text style={{ fontWeight: 'bold', color:"#fff" }}>{name}</Navbar.Text>
          
          <Navbar.Text style={{ fontWeight: 'bold', color:"#fff" }}>&nbsp;&nbsp;&nbsp;{userClass} &nbsp;&nbsp;&nbsp;  </Navbar.Text>
          <Popup/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar1;
