import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class AddressQuery extends Component {

   handleSubmit = (e) => {
      e.preventDefault();
   }

   render() {
      let textValue = '';
      if (this.props.allowQuery) {
         textValue = this.props.query;
      } else {
         textValue = this.props.query + '   ...waiting for response...';
      }
      return (
         <Form autoComplete="off" onSubmit={this.handleSubmit}>
            <Form.Group>
               <Form.Label className="text-primary">Type in address:</Form.Label>
               <Form.Control type="text"
                  onChange={this.props.handleChange}
                  value={textValue}
                  readOnly={!this.props.allowQuery}
                  placeholder="Enter a string to search" />
            </Form.Group>
         </Form>
      );
   }

}

export default AddressQuery;