import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import { TransitionGroup, CSSTransition } from 'react-transition-group'
import ProtectedRoute from './ProtectedRoute'

import { urls } from '../constants'

import { Home, Login } from '../components'

const Routes = ({ location }) => (
  <div
    style={{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
    }}
  >
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        appear
        timeout={600}
        classNames="scale-down"
      >
        <Switch location={location}>
          <Route
            exact
            path={urls.login}
            component={Login}
          />
          <Route
            exact
            path="/"
            component={Home}
          />
          <ProtectedRoute
            exact
            path={urls.home}
            component={Home}
          />
          <Route
            path="*"
            component={() => '404 not found anything boya!'}
          />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </div>
)

export default withRouter(Routes)
