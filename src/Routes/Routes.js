import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'

import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { urls } from '../constants'

import { Home, Download } from '../components'

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
            path={urls.download}
            component={Download}
          />
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
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
