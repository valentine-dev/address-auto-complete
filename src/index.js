import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Routes from './routes/Routes';
import NavHeader from './components/descriptionHeader';

require('dotenv').config();

class App extends Component {
   render() {
      return (
         <Container>
            {/* A JSX comment */}
            <NavHeader />
            <Routes />
         </Container>
      );
   }
}


ReactDOM.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>,
   document.getElementById('root'));


