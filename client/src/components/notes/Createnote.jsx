import { useState, useContext } from 'react'
import { userContext } from '../views/Home'

const Createnote = () => {
  const {Uatype, Umessage, Ualert, runNoteUpdate} = useContext(userContext)
  const [title, Utitle] = useState();
  const [note, Unote] = useState();

  const sendMessage = (text, type = 'danger', time = 2) => {
    Uatype(type); Umessage(text); Ualert({visibility: 'visible'})
    setTimeout(()=>{
      Ualert({visibility: 'hidden'})
      if (type === 'success') document.location.replace('/')
    }, time * 1000);
  }
  const submit = e => {
    e.preventDefault()
    if (title.length < 3 || note.length < 3) return sendMessage('Los campos tiene pocos caracteres')
    fetch('api/createNote', {method: 'POST', body: JSON.stringify({title, note}), headers: {'Content-Type': 'application/json'}})
    .then(res => res.json())
    .then(data => {
      data.status ? sendMessage(data.message, 'success') && runNoteUpdate(prev => prev + 1) : sendMessage(data.message)
    })
  }

  return (
    <div className="card mt-2">
      <div className="card-body">
        <h3>Crear nota</h3>
        <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label" >Titulo</label>
              <input type="text" className="form-control" id="title" value={title} onChange={e=> Utitle(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="note" className="form-label">Nota</label>
              <textarea className="form-control" style={{resize: 'none'}} id="note" rows="3" value={note} onChange={e=> Unote(e.target.value)}></textarea>
            </div>
            <button onClick={e=> submit(e)} className="btn btn-primary">Crear nota</button>
          </form>
      </div>
    </div>
  )
}

export default Createnote
