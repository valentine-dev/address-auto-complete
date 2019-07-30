import Alert from 'react-bootstrap/Alert';
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
            {props.message}
         </Alert>
      );
   } else {
      return null;
   }
};

