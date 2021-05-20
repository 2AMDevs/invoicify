import React from 'react'

import './index.scss'

const screenshots = [
  { img: 'personalize', header: 'Customize position, input type, font size and mandatory fields' },
  { img: 'preview', header: 'Preview invoice on-the-go before printing.' },
  { img: 'print', header: 'Print invoice, save it as PDF, fax or mail as you like. Options are dynamic you will see all printers added on your machine.' },
  { img: 'settings', header: 'Customize fonts, lock screen, bill background, inventory and couting till we breathe' },
  { img: 'lock', header: 'Secure Invoicify with your password, you can only set/reset with your e-mail.' },
  { img: 'update', header: 'stay up-to-date with in-app updates for exciting features ✨ and bug fixes 🙈.' },
]

const HomeDetails = () => (
  <div className="home-details">
    <div className="home-details__container">
      {screenshots.map((ss, index) => (
        <div className={`home-details__container__section ${index % 2 !== 0 ? 'odd' : ''}`}>
          <h1 className="home-details__container__section__header">{ss.header}</h1>
          <img
            className="home-details__container__section__img"
            alt={ss}
            src={`img/ss/${ss.img}.jpg`}
          />
        </div>
      ))}
    </div>
  </div>
)

export default HomeDetails
