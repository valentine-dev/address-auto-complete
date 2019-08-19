import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function SearchType(props) {
   return (
      <Form.Group>
         <Form.Label className="text-primary">Search Type:</Form.Label>
         <Form.Control as="select" onChange={props.handleChange}
            name="searchType" defaultValue={process.env.REACT_APP_FEATURE_1_DEFAULT}
            autoFocus={props.hasFocus} disabled={props.loading}>
            <option value='match'>Match</option>
            <option value='match_phrase'>Match Phrase</option>
            <option value='match_phrase_prefix'>Match Phrase Prefix</option>
         </Form.Control>
      </Form.Group>
   );
}

SearchType.propTypes = {
   handleChange: PropTypes.func.isRequired,
   hasFocus: PropTypes.bool.isRequired,
   loading: PropTypes.bool.isRequired
}

SearchType.defaultProps = {
   hasFocus: false,
   loading: false
}

export default SearchType;