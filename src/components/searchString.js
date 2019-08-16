import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class SearchString extends Component {
   render() {
      return (
         <Form.Group>
            <Form.Label className="text-primary">String to Search:</Form.Label>
            <Form.Control type="text"
               autoFocus={this.props.hasFocus}
               onChange={this.props.handleChange}
               readOnly={this.props.loading}
               placeholder="Enter a string to search" />
         </Form.Group>
      );
   }
}

export default SearchString;