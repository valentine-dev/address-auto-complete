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
                  Explore search features of Address Management Services (AMS) REST API through responsive React JS UI.
               </Card.Text>
               <DropdownButton id="dropdown-basic-button" variant="secondary" title="Pick a feature">
                  <Dropdown.Item to={process.env.REACT_APP_ROUTER_ROOT + '/feature-searchType'} as={Link}>{process.env.REACT_APP_FEATURE_1}</Dropdown.Item>
                  <Dropdown.Item to={process.env.REACT_APP_ROUTER_ROOT + '/feature-maxResults'} as={Link}>{process.env.REACT_APP_FEATURE_2}</Dropdown.Item>
                  <Dropdown.Item to={process.env.REACT_APP_ROUTER_ROOT + '/feature-country'} as={Link}>{process.env.REACT_APP_FEATURE_3}</Dropdown.Item>
                  <Dropdown.Item href="#/action-1" disabled>{process.env.REACT_APP_FEATURE_4}</Dropdown.Item>
               </DropdownButton>               
            </Card.Body>
         </Card>
         <Card border="primary" style={{ width: '18rem' }} className="text-center">
            <Card.Body>
               <Card.Title>Project Customization</Card.Title>
               <Card.Text>
                  Test and verify usages of AMS REST API in different projects.
               </Card.Text>
               <DropdownButton id="dropdown-basic-button" variant="secondary" title="Pick a project">
                  <Dropdown.Item to={process.env.REACT_APP_ROUTER_ROOT + '/project-livingwell'} as={Link}>{process.env.REACT_APP_PROJECT_1}</Dropdown.Item>
                  <Dropdown.Item href="#/action-2" disabled>{process.env.REACT_APP_PROJECT_2}</Dropdown.Item>
                  <Dropdown.Item href="#/action-3" disabled>Something Cool</Dropdown.Item>
               </DropdownButton>
            </Card.Body>
         </Card>
      </CardDeck>
   );
};