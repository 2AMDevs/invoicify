import React from 'react'

import './index.scss'

const screenshots = [
  'lock', 'personalize', 'preview',
  'print', 'settings', 'update',
]

const HomeDetails = () => (
  <div className="home-details">
    <div className="home-details__container">
      {screenshots.map((ss) => (
        <img
          className="home-details__container__img"
          alt={ss}
          src={`img/ss/${ss}.jpg`}
        />
      ))}
    </div>
  </div>
)

export default HomeDetails
