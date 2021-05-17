import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../Elements'
import HomePerks from './HomePerks'

import './index.scss'

const screenshots = [
  'lock', 'personalize', 'preview',
  'print', 'settings', 'update',
]

const Home = () => (
  <div className="home">
    <div className="home__content">
      <div className="home__content__nav">
        <div className="home__content__nav__header">
          <h1 className="home__content__nav__header__brand">Invoicify</h1>
          <Link to="/download">
            <Button
              secondary
              className="home__content__nav__help-btn"
            >
              Download
            </Button>
          </Link>
        </div>
      </div>
      <div className="home__content__wrapper">
        <div className="home__content__perks">
          <HomePerks />
        </div>

        <div className="home__content__main">
          {screenshots.map((ss) => (
            <img
              className="home__content__main__img"
              alt={ss}
              src={`img/ss/${ss}.jpg`}
            />
          ))}
        </div>
      </div>
    </div>
    <a
      className="home__gh-link"
      href="https://github.com/2AMDevs/invoicify-app"
      target="_blank"
      rel="noreferrer noopener"
    >
      <img
        alt="github icon"
        className="home__gh-link__img"
        src="https://camo.githubusercontent.com/351dcb42fb2be38ad786b8e29aa8b6b9dc9c2c8905aa451a1074f1ca5a76ce64/68747470733a2f2f696d6167652e666c617469636f6e2e636f6d2f69636f6e732f7376672f3931392f3931393834372e737667"
      />
    </a>
  </div>
)

export default Home
