import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../Elements'

import './index.scss'

const Home = () => (
  <div className="home">
    <img
      className="home__bg-img"
      src="img/home-bg-swirl.jpg"
      alt="swirrrrrrrrrrrrl"
    />
    <div className="home__content">
      <div className="home__content__nav">
        <div className="home__content__nav__header">
          <h1>Invoicify</h1>
          <Link to="/download">
            <Button
              secondary
              className="home__content__nav__help-btn"
            >
              Why Invoicify?
            </Button>
          </Link>
        </div>
      </div>
      <div className="home__content__main">
        <div className="home__content__main__text">
          <h1 className="home__content__main__text__title">Extremely customizable</h1>
          <h1 className="home__content__main__text__sub-title">& relaiable invoice software</h1>
          <h1 className="home__content__main__text__sub-title--small">A complete invoice solution for businesses</h1>
        </div>
        <div className="home__content__main__download-section">
          <Link to="/download">
            <Button
              secondary
              className="home__content__main__download-section__dwnld-btn"
            >
              Download
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Home
