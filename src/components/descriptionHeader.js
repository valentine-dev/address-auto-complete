import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

export default function DescHeader() {
   return (
   <Navbar bg="dark" variant="dark" sticky="top" expand>
               <Navbar.Brand href="#home">
                  {'AMS Used in Living Well Project - 2019, v' + process.env.REACT_APP_VERSION}
               </Navbar.Brand>
            </Navbar>
   )
};