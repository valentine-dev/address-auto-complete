import React, { Fragment } from 'react';
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
                  <Fragment key={prop}>
                     {addressObj[prop] !== undefined && addressObj[prop] !== null && addressObj[prop].trim().length > 0 ?
                        prop === 'id' ?
                           (<tr>
                              <td>{'LPDS ID'}</td>
                              <td><a rel='noopener noreferrer' target='_blank' href={process.env.REACT_APP_FETCH_BY_LPDS_ID_URL_PREFIX + addressObj[prop]}>{addressObj[prop]}</a></td>
                           </tr>)
                           : (<tr>
                              <td>{prop}</td>
                              <td>{addressObj[prop]}</td>
                           </tr>)
                        : null}
                  </Fragment>
               )}
            </tbody>
         </Table>
      </div>
   );
}

export default AddressContent;