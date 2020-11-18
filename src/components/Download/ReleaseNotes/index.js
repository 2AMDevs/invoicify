import React from 'react'

import ReactMarkdown from 'react-markdown'
import 'github-markdown-css'

import './index.scss'

const ReleaseNotes = ({ notes }) => (
  <div className="release-notes">
    <div className="release-notes__header">
      Release Notes
    </div>
    <br />
    <div className="release-notes__body">
      {(notes?.slice(0, 4)?.map((release) => (
        <div
          key={release.node_id}
          className="markdown-body"
        >
          <ReactMarkdown allowDangerousHtml>
            {release.body}
          </ReactMarkdown>
          <br />
        </div>
      )))}
    </div>
  </div>
)

export default ReleaseNotes
