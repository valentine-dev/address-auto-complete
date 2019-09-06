import React from 'react';
import Feature from './Feature';
import ErrorBoundary from '../../utility/ErrorBoundary';

export default () => {
   const intro = <div>Currently we support the following types of address sources.
      <ul>
         <li><span className="font-weight-bold">Telus</span>: Search against addresses in Telus databases.</li>
         <li><span className="font-weight-bold">Canada Post</span>: Search against addresses from Canada Post.</li>
         <li><span className="font-weight-bold">Telus and Canada Post</span>: Search both Telus and Canada Post and show results from both.</li>
      </ul>
   </div>;
   const heading = "Different Address Sources";
   return <ErrorBoundary><Feature heading={heading} focus="Source">{intro}</Feature></ErrorBoundary>;
};