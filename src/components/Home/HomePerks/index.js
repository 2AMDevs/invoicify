import React from 'react'

import './index.scss'

const HomePerks = () => (
  <div className="home-perks noselect">
    <div className="home-perks__card purple-card">
      <div className="home-perks__card__content">
        <div className="home-perks__card__content__header">
          <span
            role="img"
            aria-label="In OSS we trust"
          >
            🤝🏻
          </span>
        </div>
        <div className="home-perks__card__content__title">
          Open Source
        </div>
      </div>
    </div>

    <div className="home-perks__card orange-card">
      <div className="home-perks__card__content">
        <div className="home-perks__card__content__header">
          <span
            role="img"
            aria-label="Configure Hammer"
          >
            🔨
          </span>
        </div>
        <div className="home-perks__card__content__title">
          Configurable
        </div>
      </div>
    </div>
  </div>
)

export default HomePerks
