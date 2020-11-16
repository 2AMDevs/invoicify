import React from 'react'

import ReactMarkdown from 'react-markdown'

const ReleaseNotes = ({ notes }) => (
  <>
    <h2>
      <span role="img" aria-label="Notes">📝</span>
      Release Notes
    </h2>
    <br />
    {(notes.slice(0, 4).map((release) => (
      <div key={release.node_id}>
        <ReactMarkdown>{release.body}</ReactMarkdown>
        <br />
      </div>
    )))}
  </>
)

export default ReleaseNotes
