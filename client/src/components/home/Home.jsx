import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import Navbar from '../Navbar'
import Createnote from '../notes/Createnote'
import Shownotes from '../notes/Shownotes'

export const userContext = createContext()

const Home = () => {
  const [atype, Uatype] = useState('danger')
  const [message, Umessage] = useState('')
  const [alert, Ualert] = useState({display: 'none'})
  const [noteUpdate, runNoteUpdate] = useState(0)

  return (
    <userContext.Provider value={{Uatype, Umessage, Ualert, runNoteUpdate, noteUpdate}}>
      <Navbar/>
      <div className='container'>
          <p>
            HOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOMEHOME
          </p>
          <div className={`alert alert-${atype}`} style={alert} role="alert">
              {message}
            </div>  
          <Createnote/>
          <Shownotes/>
      </div>
    </userContext.Provider>

  )
}

export default Home
