import React from 'react'

import { Button } from '../Elements'
import HomeDetails from './HomeDetails'
import HomePerks from './HomePerks'

import './index.scss'

const Home = (props) => (
  <div className="home">
    <div className="home__content">
      <div className="home__content__nav">
        <div className="home__content__nav__header">
          <div className="home__content__nav__header__brand">
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
            <h1>One Stop Solution for all your invoice needs</h1>
            <h2>Highly configurable</h2>
            <Button
              secondary
              className="home__content__wrapper__hero__download-btn"
              onClick={() => props.history.push('/download')}
            >
              Download Now
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
