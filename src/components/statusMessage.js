import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import React from 'react';

export default function StatusMsg(props) {

   const message = props.message;
   if (message.length > 0) {
      let status = 'info';
      if (message.startsWith('ERROR')) {
         status = 'warning';
      }
      return (
         <Alert variant={status}>
            {message.startsWith('Loading...') && <Spinner animation="border" variant="success" size="sm" />}
            {' ' + props.message}
         </Alert>
      );
   } else {
      return null;
   }
};

