import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import React from 'react';

export default function DescHeader() {
   return (
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
         <Navbar.Brand as={Link} to={process.env.REACT_APP_ROUTER_ROOT + '/index.html'} >{'Address Management Services UI'}</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
               <Nav.Link as={Link} to={process.env.REACT_APP_ROUTER_ROOT + '/index.html'} >Home</Nav.Link>
               <Nav.Link as={Link} to={process.env.REACT_APP_ROUTER_ROOT + '/features'} >Features</Nav.Link>
               <Dropdown as={Nav.Item}>
                  <Dropdown.Toggle as={Nav.Link}>Projects</Dropdown.Toggle>
                  <Dropdown.Menu>
                  {/* /project/livingwell will not be working since js is in folder ./ */}
                  <Dropdown.Item to={process.env.REACT_APP_ROUTER_ROOT + '/project-livingwell'} as={Link}>Living Well</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" disabled>Address API</Dropdown.Item>
                  <Dropdown.Item href="#/action-3" disabled>Something Cool</Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
               {/* DropdownButton works as well but  <NavDropdown> is NOT working
               <DropdownButton variant="secondary" id="dropdown-basic-button" title="Projects">
                  <Dropdown.Item to={process.env.REACT_APP_ROUTER_ROOT + '/projects/livingwell'} as={Link}>Living Well</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" disabled>Address API</Dropdown.Item>
                  <Dropdown.Item href="#/action-3" disabled>Something Cool</Dropdown.Item>
               </DropdownButton>
               */}
            </Nav>
            <Navbar.Text className="justify-content-end">{'v' + process.env.REACT_APP_VERSION}</Navbar.Text>
         </Navbar.Collapse>
      </Navbar>
   )
};