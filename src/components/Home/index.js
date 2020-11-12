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
      <Link to="/download">
        <Button
          secondary
          className="home__content__dwnld-btn"
        >
          Download
        </Button>
      </Link>
    </div>
  </div>
)

export default Home
