import React, { useState, useEffect } from 'react'

import { Button, Loader } from '../Elements'

import ReleaseNotes from './ReleaseNotes'

import './index.scss'

const Download = () => {
  const [rn, setRn] = useState('')
  const [latestAsset, setLatestAsset] = useState({})

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('http://localhost:3232/invoicify-release')
      const jsonData = await data.json()
      setRn(jsonData)
      setLatestAsset(jsonData[0].assets[0])
    }

    getData()
  }, [])

  return (
    <div className="download-container">
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
              <Button
                type="submit"
                primary
                className="download-box__content__input-section__submit"
              >
                Download for Windows
                {latestAsset.size ? (
                  <h5>
                    Size:
                    {` ${(latestAsset.size / (1024 * 1024)).toFixed(2)} MB`}
                  </h5>
                ) : '' }
              </Button>
            </div>
          </div>
        </div>
        <br />
        <div className="changelog">
          {!rn ? <Loader /> : <ReleaseNotes notes={rn}/>}
        </div>
      </div>
    </div>
  )
}
export default Download
