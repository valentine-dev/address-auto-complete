import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';

function QueryResult(props) {
   return  ( props.queryResults.length > 0 &&
   <ListGroup>
      {props.queryResults.map((record) =>
         (record.source === 'TELUS') ?
            <ListGroup.Item key={record.id} action variant="primary" onClick={() => props.handleClick(record)}>{record.address}</ListGroup.Item>
            :
            <ListGroup.Item key={record.id} action variant="secondary" onClick={() => props.handleClick(record)}>{record.address}</ListGroup.Item>
      )}
   </ListGroup>
   );
}

export default QueryResult;