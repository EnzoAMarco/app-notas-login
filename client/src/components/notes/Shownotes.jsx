import React from 'react'
import Note from './Note'

function Shownotes() {
  return (
    <div className="card mt-5 mb-5">
      <div className="card-body">
        <h3>Notas</h3>
        <Note/>
        <Note/>
        <Note/>
      </div>
    </div>
  )
}

export default Shownotes
