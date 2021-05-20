import React from 'react'

import { Button } from '../Elements'
import HomeDetails from './HomeDetails'
import HomePerks from './HomePerks'

import './index.scss'

const h1Text = 'Modern ✨ & Fast ⚡ Billing Solution for emerging business'

const Home = (props) => (
  <div className="home">
    <div className="home__content">
      <div className="home__content__nav">
        <div className="home__content__nav__header">
          <div className="home__content__nav__header__brand noselect">
            <img
              className="home__content__nav__header__brand__logo"
              src="/favicon.png"
              alt="Invoicify brand logo"
            />
            Invoicify
          </div>
          <a
            className="home__content__nav__header__github"
            href="https://github.com/2AMDevs/invoicify-app"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              alt="github icon"
              className="home__content__nav__header__github__img"
              src="https://camo.githubusercontent.com/351dcb42fb2be38ad786b8e29aa8b6b9dc9c2c8905aa451a1074f1ca5a76ce64/68747470733a2f2f696d6167652e666c617469636f6e2e636f6d2f69636f6e732f7376672f3931392f3931393834372e737667"
            />
          </a>
        </div>
      </div>
      <div className="home__content__grad" />
      <div className="home__content__wrapper">
        <div className="home__content__wrapper__hero">
          <div className="home__content__wrapper__hero__text">
            <h1>
              {h1Text}
            </h1>
            <h2>
              Generate, store and manage Invoices in a quicker and safer way.
              It lets you stick to your preferences and preview invoices on-the-go.
            </h2>
            <Button
              secondary
              className="home__content__wrapper__hero__download-btn noselect"
              onClick={() => props.history.push('/download')}
            >
              Try it now!
            </Button>
          </div>
          <div className="home__content__wrapper__hero__perks">
            <HomePerks />
          </div>
        </div>
        <HomeDetails />
      </div>
    </div>
  </div>
)

export default Home
