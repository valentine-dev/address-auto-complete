import React, { Suspense } from 'react';

export default function WaitForLoading (props) {
   return (
      <Suspense fallback={<div style={{ margin: '1rem 0 0 0', color: 'red'}}>Loading ......</div>}>
         {props.children}
      </Suspense>
   );
};