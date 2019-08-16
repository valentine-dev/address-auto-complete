import React from 'react';
import Feature from './Feature';
import ErrorBoundary from '../../utility/ErrorBoundary';

export default () => {
   const intro = "Currently we support 79 countries or territories. The default value is Canada.";
   const heading = "Country or Territory";
   return <ErrorBoundary><Feature heading={heading} focus="Country">{intro}</Feature></ErrorBoundary>;
};