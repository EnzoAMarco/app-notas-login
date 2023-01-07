import { createContext, useState } from 'react'
import Navbar from '../Navbar'
import Createnote from '../notes/Createnote'
import Shownotes from '../notes/Shownotes'

export const userContext = createContext()

const Home = () => {
  const [atype, Uatype] = useState('danger')
  const [message, Umessage] = useState('-')
  const [alert, Ualert] = useState({visibility: 'hidden'})
  const [noteUpdate, runNoteUpdate] = useState(0)

  return (
    <userContext.Provider value={{Uatype, Umessage, Ualert, runNoteUpdate, noteUpdate}}>
      <Navbar/>
      <div className='container'>
        <div className={`alert alert-${atype} m-0`} style={alert} role="alert">
          {message}
        </div>  
        <Createnote/>
        <Shownotes/>
      </div>
    </userContext.Provider>

  )
}

export default Home
