import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

import { Button, Loader } from '../Elements'

import ReleaseNotes from './ReleaseNotes'

import WinLogo from '../../assets/windows.svg'

import './index.scss'

const Download = () => {
  const [rn, setRn] = useState('')
  const [latestAsset, setLatestAsset] = useState({})

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('https://api.github.com/repos/2AMDevs/invoicify-app/releases')
      const jsonData = await data.json()
      setRn(jsonData)
      setLatestAsset(jsonData[0].assets[0])
    }

    getData()
  }, [])

  return (
    <div className="download-container">
      <Helmet>
        <title>Download Invoicify</title>
        <meta
          name="description"
          content="Download and Try Invoicify for free"
        />
      </Helmet>
      <img
        className="download-container__bg-img"
        src="img/download/background.png"
        alt="Preview of Invicify App"
      />
      <div className="download-container__wrapper">
        <div
          className="download-box"
        >
          <div className="download-box__content">
            <span className="download-box__content__header">
              Get Invoicify for your PC
            </span>
            <div className="download-box__content__input-section">
              <a
                href={latestAsset.browser_download_url}
                download
              >
                <Button
                  type="submit"
                  primary
                  className="download-box__content__input-section__submit"
                >
                  <h3>
                    Download for
                    {' '}
                    <img
                      className="inline-icon"
                      alt="Windows Logo"
                      src={WinLogo}
                    />

                  </h3>
                  <p className="download-box__content__input-section__subtext">
                    {latestAsset?.size ? (
                      <h4>
                        {rn[0].tag_name}
                        {' '}
                        (Size:
                        {` ${(latestAsset.size / (1024 * 1024)).toFixed(2)} MB`}
                        )
                      </h4>
                    ) : '' }
                  </p>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <br />
        <div className="changelog">
          {!rn ? <Loader /> : <ReleaseNotes notes={rn} />}
        </div>
      </div>
    </div>
  )
}
export default Download
