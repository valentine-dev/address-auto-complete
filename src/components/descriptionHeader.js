import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import React from 'react';

export default function DescHeader() {
   return (
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
         <Navbar.Brand as={Link} to={process.env.REACT_APP_ROUTER_ROOT + '/index.html'} >{'Address Management Services UI - Search'}</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
               <Nav.Link as={Link} to={process.env.REACT_APP_ROUTER_ROOT + '/index.html'} >Home</Nav.Link>
               <Dropdown as={Nav.Item}>
                  <Dropdown.Toggle as={Nav.Link}>Features</Dropdown.Toggle>
                  <Dropdown.Menu>
                     <Dropdown.Item to={process.env.REACT_APP_ROUTER_ROOT + '/feature-searchType'} as={Link}>{process.env.REACT_APP_FEATURE_1}</Dropdown.Item>
                     <Dropdown.Item to={process.env.REACT_APP_ROUTER_ROOT + '/feature-maxResults'} as={Link}>{process.env.REACT_APP_FEATURE_2}</Dropdown.Item>
                     <Dropdown.Item to={process.env.REACT_APP_ROUTER_ROOT + '/feature-country'} as={Link}>{process.env.REACT_APP_FEATURE_3}</Dropdown.Item>
                     <Dropdown.Item href="#/action-1" disabled>{process.env.REACT_APP_FEATURE_4}</Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
               <Dropdown as={Nav.Item}>
                  <Dropdown.Toggle as={Nav.Link}>Projects</Dropdown.Toggle>
                  <Dropdown.Menu>
                     {/* /project/livingwell will not be working since js is in folder ./ */}
                     <Dropdown.Item to={process.env.REACT_APP_ROUTER_ROOT + '/project-livingwell'} as={Link}>{process.env.REACT_APP_PROJECT_1}</Dropdown.Item>
                     <Dropdown.Item href="#/action-2" disabled>{process.env.REACT_APP_PROJECT_2}</Dropdown.Item>
                     <Dropdown.Item href="#/action-3" disabled>Something Cool</Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
            </Nav>
            <Navbar.Text className="justify-content-end">{'v' + process.env.REACT_APP_VERSION}</Navbar.Text>
         </Navbar.Collapse>
      </Navbar >
   )
};