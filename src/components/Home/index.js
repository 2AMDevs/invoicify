import React from 'react'

import { Button } from '../Elements'
import HomeDetails from './HomeDetails'
import HomeFooter from './HomeFooter'
// import HomePerks from './HomePerks'

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
          <div className="home__content__nav__header__right">
            <a
              className="home__content__nav__header__github"
              href="https://github.com/2AMDevs/invoicify-app"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="github icon"
                className="home__content__nav__header__github__img"
                src="/img/github.png"
              />
            </a>
            <a
              className="home__content__nav__header__discord"
              href="https://discord.gg/UgvYpNrHa6"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="discord icon"
                className="home__content__nav__header__discord__img"
                src="/img/discord.png"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="home__content__grad" />
      <div className="home__content__wrapper">
        <div className="home__content__wrapper__hero">
          <div className="home__content__wrapper__hero__text">
            <h1>
              {h1Text}
            </h1>
            <div className="dividerdark" />
            <h2>
              Generate, store and manage Invoices in a quicker and safer way.
            </h2>
            <Button
              secondary
              className="home__content__wrapper__hero__download-btn noselect"
              onClick={() => props.history.push('/download')}
            >
              Try it now!
            </Button>
          </div>
          <img
            className="home__content__wrapper__hero-img"
            src="img/ss/invoicify-in-laptop.png"
            alt="invoicify in laptop"
          />
        </div>
        <HomeDetails />
      </div>
      <HomeFooter />
    </div>
  </div>
)

export default Home
