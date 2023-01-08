import { useEffect, useContext, useState } from 'react'
import { userContext } from '../views/Home'

const Note = () => {
  const {noteUpdate, runNoteUpdate} = useContext(userContext)
  const [datajsx, Udatajsx] = useState([])

  useEffect(()=>{
    fetch('/api/getNotes')
    .then(res => res.json())
    .then(data => {if (data.status) Udatajsx(data.message)})
  },[noteUpdate])

  const deleteNote = (e) => {
    fetch('/api/deleteNote', { method: 'PUT', body: JSON.stringify({note_id: e}), headers:{ 'Content-Type': 'application/json' }})
    .then(res => res.json())
    runNoteUpdate(prev => prev + 1)
  }

  return (
    datajsx.map(e => 
      e.state === 1 ? (
      <div className="card m-3" key={e.note_id} style={{display:'inline-block'}}>
        <div className="card-body">
          <h5 className="card-title">{e.title}</h5>
          <span style={{fontSize: '.8rem'}} className="card-subtitle mb-2 text-muted">{e.date.slice(0,10)}</span>
          <p className="card-text">{e.note}</p>
          <button className="btn btn-primary" onClick={()=>deleteNote(e.note_id)}>Borrar nota</button>
        </div>
      </div>
    ) 
    :
    null
    )
  )
}

export default Note
