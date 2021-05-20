import React from 'react'

import './index.scss'

const screenshots = [
  { img: 'personalize', header: 'Customize position, input type, font size and field mandatory or not.' },
  { img: 'preview', header: 'Preview invoice in-app before printing.' },
  { img: 'print', header: 'Print invoice, save as pdf,fax the invoice or send to one note. Options are dynamic you will see all printers added on your machine.' }, { img: 'settings', header: 'Customize' },
  { img: 'lock', header: 'Secure Invoicify with your password, you can only set/reset with your e-mail.' },
  { img: 'update', header: 'Always stay latest with in-app updates for new features and bugfixes.' },
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
