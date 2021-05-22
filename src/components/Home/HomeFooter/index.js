import React from 'react'

import './index.scss'

const HomeFooter = () => (
  <div className="home-footer">
    <div className="home-footer__left" />
    <div className="home-footer__right">

      <div className="home-footer__flag">
        <div className="home-footer__flag__saffron" />
        <div className="home-footer__flag__white" />
        <div className="home-footer__flag__green" />
      </div>
      <div className="home-footer__right__company">
        ©
        <a
          className="home-footer__right__company__name"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/2AMDevs"
        >
          2AM Devs
        </a>
      </div>
    </div>
  </div>
)

export default HomeFooter
