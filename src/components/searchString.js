import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function SearchString(props) {
   return (
      <Form.Group>
         <Form.Label className="text-primary">String to Search:</Form.Label>
         <Form.Control type="text"
            name="searchString"
            autoFocus={props.hasFocus}
            onChange={props.handleChange}
            readOnly={props.loading}
            placeholder="Enter a string to search" />
      </Form.Group>
   );
}

SearchString.propTypes = {
   handleChange: PropTypes.func.isRequired,
   hasFocus: PropTypes.bool.isRequired,
   loading: PropTypes.bool.isRequired
}

SearchString.defaultProps = {
   hasFocus: false,
   loading: false
}

export default SearchString;