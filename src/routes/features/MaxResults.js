import React from 'react';
import Feature from './Feature';
import ErrorBoundary from '../../utility/ErrorBoundary';

export default () => {
   const intro = "Maximum number of search results can be set in the query. The default value is 20.";
   const heading = "Maximum Number of Results";
   return <ErrorBoundary><Feature heading={heading} focus="MaxResults">{intro}</Feature></ErrorBoundary>;
};