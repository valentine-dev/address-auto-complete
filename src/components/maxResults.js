import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class MaxResults extends Component {
   render() {
      const selectValue = this.props.selected;
      return (
         <Form.Group>
            <Form.Label className="text-primary">Maximum Number of Results ({selectValue}):</Form.Label>
            <Form.Control type="number" required min="1" max="30" onChange={this.props.handleChange} value={selectValue}
               autoFocus={this.props.hasFocus} readOnly={this.props.loading} />
         </Form.Group>
      );
   }
}

export default MaxResults;