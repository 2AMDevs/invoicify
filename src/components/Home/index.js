import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

const Home = () => (
  <div className="home">
    <div className="home__content">
      yay! the homepage
      <Link to="/login">Login</Link>
    </div>
  </div>
)

export default Home
