

import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const LivingWell = lazy(() => import('./projects/LivingWell'));
const Features = lazy(() => import('./Features'));

function NoMatch({ location }) {
   return (
      <div style={{ margin: '2rem 0 0 0' }} >
         Not found for <code>{location.pathname}</code>.
      </div>
   );
}

export default function Routes() {
   return (
      <Suspense fallback={<div>Loading Route...</div>}>
         <Switch>
            <Route exact path={process.env.REACT_APP_ROUTER_ROOT + '/index.html'} component={Home} />
            <Route path={process.env.REACT_APP_ROUTER_ROOT + '/features'} component={Features} />
            <Route path={process.env.REACT_APP_ROUTER_ROOT + '/project-livingwell'} component={LivingWell} />
            <Route component={NoMatch} />
         </Switch>
      </Suspense>
   );
};