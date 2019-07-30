import React from 'react';
import Table from 'react-bootstrap/Table';

function AddressContent(props) {
   const addressObj = props.addressContent;
   if (Object.keys(addressObj).length === 0 && addressObj.constructor === Object) {
      // check whether address object is empty: {}
      return null;
   }

   return (
      <div>
         <p className="text-primary">Address content:</p>
         <Table striped bordered hover size="sm">
            <tbody>
               {Object.keys(addressObj).map((prop) =>
                  <tr key={prop}>
                     <td>{prop}</td>
                     <td>{addressObj[prop]}</td>
                  </tr>
               )}
            </tbody>
         </Table>
      </div>
   );
}

export default AddressContent;