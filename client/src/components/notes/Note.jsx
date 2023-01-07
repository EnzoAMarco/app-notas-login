import { useEffect, useContext, useState } from 'react'
import { userContext } from '../views/Home'

const Note = () => {
  const {noteUpdate} = useContext(userContext)
  const [datajsx, Udatajsx] = useState([])

  useEffect(()=>{
    fetch('/api/getNotes')
    .then(res => res.json())
    .then(data => {if (data.status) Udatajsx(data.message)})
  },[noteUpdate])
  return (
    datajsx.map(e => (
      <div className="card m-3" key={e.note_id} style={{display:'inline-block'}}>
        <div className="card-body">
          <h5 className="card-title">{e.title}</h5>
          <span style={{fontSize: '.8rem'}} className="card-subtitle mb-2 text-muted">{e.date.slice(0,10)}</span>
          <p className="card-text">{e.note}</p>
        </div>
      </div>
    ))
  )
}

export default Note
