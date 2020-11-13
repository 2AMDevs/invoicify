import React from 'react'

import './index.scss'

const HomePerks = () => (
  <div className="home-perks">
    <div className="home-perks__card purple-card">
      <div className="home-perks__card__content">
        <div className="home-perks__card__content__header">
          100%
        </div>
        <div className="home-perks__card__content__title">
          Open Source
        </div>
      </div>
    </div>

    <div className="home-perks__card orange-card">
      <div className="home-perks__card__content">
        <div className="home-perks__card__content__header">
          100%
        </div>
        <div className="home-perks__card__content__title">
          Free of cost
        </div>
      </div>
    </div>
  </div>
)

export default HomePerks
