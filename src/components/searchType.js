import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class SearchType extends Component {
   render() {
      const selectValue = this.props.selected;
      return (
         <Form.Group>
            <Form.Label className="text-primary">Search Type:</Form.Label>
            <Form.Control as="select" onChange={this.props.handleChange} value={selectValue}
               autoFocus={this.props.hasFocus} disabled={this.props.loading}>
               <option value='match'>Match</option>
               <option value='match_phrase'>Match Phrase</option>
               <option value='match_phrase_prefix'>Match Phrase Prefix</option>
            </Form.Control>
         </Form.Group>
      );
   }
}

export default SearchType;