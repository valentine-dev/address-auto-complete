import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function MaxResults(props) {
   return (
      <Form.Group>
         <Form.Label className="text-primary">Maximum Number of Results:</Form.Label>
         <Form.Control type="number" required min="1" max="30" name="maxResults"
            onChange={props.handleChange} defaultValue={parseInt(process.env.REACT_APP_FEATURE_2_DEFAULT)}
            autoFocus={props.hasFocus} readOnly={props.loading} />
      </Form.Group>
   );
}

MaxResults.propTypes = {
   handleChange: PropTypes.func.isRequired,
   hasFocus: PropTypes.bool.isRequired,
   loading: PropTypes.bool.isRequired
}

MaxResults.defaultProps = {
   hasFocus: false,
   loading: false
}

export default MaxResults;