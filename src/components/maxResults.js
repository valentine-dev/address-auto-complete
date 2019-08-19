import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function MaxResults(props) {
   return (
      <Form.Group>
         <Form.Label className="text-primary">Maximum Number of Results ({props.selected}):</Form.Label>
         <Form.Control type="number" required min="1" max="30"
            onChange={props.handleChange} value={props.selected}
            autoFocus={props.hasFocus} readOnly={props.loading} />
      </Form.Group>
   );
}

MaxResults.propTypes = {
   handleChange: PropTypes.func.isRequired,
   hasFocus: PropTypes.bool.isRequired,
   loading: PropTypes.bool.isRequired,
   selected: PropTypes.number.isRequired
}

MaxResults.defaultProps = {
   hasFocus: false,
   loading: false,
   selected: 10
}

export default MaxResults;