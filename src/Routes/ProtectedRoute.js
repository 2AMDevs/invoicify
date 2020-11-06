import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { Auth } from '../services'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const authService = new Auth()
  return (
    <Route
      {...rest}
      render={
        (props) => {
          if (authService.isAuthenticated()) {
            return <Component {...props} />
          }
          return (
            <Redirect
              to={{
                pathname: '/login',
                from: props.location,
              }}
            />
          )
        }
      }
    />
  )
}

export default ProtectedRoute
