import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

export default function Home() {
   return (
      <CardDeck style={{ margin: '2rem' }} >
         <Card border="primary" style={{ width: '18rem' }} className="text-center">
            <Card.Body>
               <Card.Title>Feature Exploration</Card.Title>
               <Card.Text>
                  Explore features of Address Management Services (AMS) REST API through responsive React JS UI.
               </Card.Text>
               <Card.Link as={Link} to={process.env.REACT_APP_ROUTER_ROOT + '/features'}>Go to Features</Card.Link>
            </Card.Body>
         </Card>
         <Card border="primary" style={{ width: '18rem' }} className="text-center">
            <Card.Body>
               <Card.Title>Project Customization</Card.Title>
               <Card.Text>
                  Test and verify usages of AMS REST API in different projects.
               </Card.Text>
               <DropdownButton id="dropdown-basic-button" variant="secondary" title="Pick a project">
                  <Dropdown.Item to={process.env.REACT_APP_ROUTER_ROOT + '/project-livingwell'} as={Link}>Living Well</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" disabled>Address API</Dropdown.Item>
                  <Dropdown.Item href="#/action-3" disabled>Something Cool</Dropdown.Item>
               </DropdownButton>
            </Card.Body>
         </Card>
      </CardDeck>
   );
};