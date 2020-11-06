import React from 'react'

import cn from 'classnames'
import { Button, Input, Loader } from '../Elements'
import { Auth } from '../../services'
import { urls } from '../../constants'

import './index.scss'

class Login extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoginPage: true,
      email: '',
      password: '',
    }
  }

  componentDidMount () {
    this.redirectIfLoggedin()
  }

  setIsLoginPage = (isLoginPage) => {
    this.setState({ isLoginPage })
  }

  setEmail = (e) => this.setState({ email: e.target.value })

  setPassword = (e) => this.setState({ password: e.target.value })

  setConfirmPassword = (e) => this.setState({ confirmPassword: e.target.value })

  dispatchLogin = () => {
    const authService = new Auth()
    authService.login(this.state.email, this.state.password, this.redirectIfLoggedin)
  }

  dispatchSignUp = () => {
    const authService = new Auth()
    if (this.state.password === this.state.confirmPassword) {
      authService.signup(this.state.email, this.state.password, this.redirectIfLoggedin)
    }
  }

  redirectIfLoggedin = () => {
    const authService = new Auth()
    if (authService.isAuthenticated()) {
      this.props.history.push(urls.home)
    }
  }

  render () {
    return (
      <div className="login-container">
        <img
          className="login-container__bg-img"
          src="img/login/loginBg.png"
          alt="It's yo chhora Soda EmonZaemon"
        />
        <div className="login-container__wrapper">
          <div
            className={cn(
              'login-box', {
                'left-collapse': !this.state.isLoginPage,
              },
            )}
          >
            {/*
              use ⬇ to redirect after login
              {props.location.from && (
                <div>
                  <span>
                    if you can see this message, it means that you are redirected here from
                    {props.location.from.pathname}
                  </span>
                </div>
              )}
            */}
            <div className="login-box__content">
              <span className="login-box__content__header">
                Login
              </span>
              <div className="login-box__content__input-section">
                <Input
                  type="email"
                  placeholder="Username or email"
                  aria-label="Username or email"
                  className="login-box__content__input-section__mail"
                  onChange={this.setEmail}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                  className="login-box__content__input-section__pass"
                  onChange={this.setPassword}
                />
                <Button
                  secondary
                  className="login-box__content__input-section__pass-forgot"
                >
                  Forgot password ?
                </Button>
                <Button
                  type="submit"
                  primary
                  className="login-box__content__input-section__submit"
                  onClick={this.dispatchLogin}
                >
                  Login
                </Button>
                <Button
                  primary
                  className="login-box__content__input-section__submit"
                  onClick={() => this.setIsLoginPage(!this.state.isLoginPage)}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
          <div className="login-oauth">
            <Loader />
          </div>
          <div
            className={cn(
              'login-box', 'sign-up-box', {
                'right-collapse': this.state.isLoginPage,
              },
            )}
          >
            {/*
              use ⬇ to redirect after login
              {props.location.from && (
                <div>
                  <span>
                    if you can see this message, it means that you are redirected here from
                    {props.location.from.pathname}
                  </span>
                </div>
              )}
            */}
            <div className="login-box__content">
              <span className="login-box__content__header">
                Sign Up
              </span>
              <div className="login-box__content__input-section">
                <Input
                  type="email"
                  placeholder="email"
                  aria-label="email"
                  className="login-box__content__input-section__mail"
                  onChange={this.setEmail}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                  className="login-box__content__input-section__pass"
                  onChange={this.setPassword}
                />
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  aria-label="Confirm Password"
                  className="login-box__content__input-section__pass"
                  onChange={this.setConfirmPassword}
                />
                <Button
                  type="submit"
                  primary
                  className="login-box__content__input-section__submit"
                  onClick={this.dispatchSignUp}
                >
                  Sign Up
                </Button>
                <Button
                  type="submit"
                  primary
                  className="login-box__content__input-section__submit"
                  onClick={() => this.setIsLoginPage(!this.state.isLoginPage)}
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
