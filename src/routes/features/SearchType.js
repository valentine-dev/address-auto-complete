import React from 'react';
import Feature from './Feature';
import ErrorBoundary from '../../utility/ErrorBoundary';

export default () => {
   const intro = <div>Currently we support the follwing types of full text queries.
      <ul>
         <li>The <span className="font-weight-bold">match</span> query is the standard query for performing full text queries, including fuzzy matching and phrase or proximity queries.</li>
         <li>The <span className="font-weight-bold">match_phrase</span> query likes the match query but used for matching exact phrases or word proximity matches.</li>
         <li>The <span className="font-weight-bold">match_phrase_prefix</span> query likes the match_phrase query, but does a wildcard search on the final word.</li>
      </ul>
   </div>;
   const heading = "Types of Full Text Queries";
   return <ErrorBoundary><Feature heading={heading} focus="SearchType">{intro}</Feature></ErrorBoundary>;
};