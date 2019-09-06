import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function Source(props) {
   return (
      <Form.Group>
         <Form.Label className="text-primary">Address Source:</Form.Label>
         <Form.Control as="select" onChange={props.handleChange}
            name="src" defaultValue={process.env.REACT_APP_FEATURE_4_DEFAULT}
            autoFocus={props.hasFocus} disabled={props.loading}>
            <option value='T'>Telus</option>
            <option value='CP'>Canada Post</option>
            <option value='T_AND_CP'>Telus and Canada Post (Show Both)</option>
         </Form.Control>
      </Form.Group>
   );
}

Source.propTypes = {
   handleChange: PropTypes.func.isRequired,
   hasFocus: PropTypes.bool.isRequired,
   loading: PropTypes.bool.isRequired
}

Source.defaultProps = {
   hasFocus: false,
   loading: false
}

export default Source;