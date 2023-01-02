import React from 'react'
import { useState } from 'react'
import Navbar from '../Navbar'

const Login = () => {
  const [user, Uuser] = useState()
  const [pass, Upass] = useState()
  const [atype, Uatype] = useState('danger')
  const [message, Umessage] = useState('')
  const [alert, Ualert] = useState({display: 'none'})

  const sendMessage = (text, type = 'danger', time = 5) => {
    Uatype(type); Umessage(text); Ualert({display: 'block'})
    setTimeout(()=>{
      Ualert({display: 'none'})
    }, time * 1000);
  }

  const submit = e => {
    e.preventDefault()
    // if (user.length < 3 || pass.length < 3) return sendMessage('Por favor complete los campos de forma correcta');
    // sendMessage('Sesión iniciada', 'success')

    return user.length < 3 || pass.length < 3? sendMessage('Por favor complete los campos de forma correcta') : sendMessage('Sesión iniciada', 'success')
  }

  return (
    <>
      <Navbar />
      <div className='container mt-5'>
        <div className={`alert alert-${atype}`} style={alert} role="alert">
          {message}
        </div>  
        <div className='card'>
          <div className='card-body'>
            <form>
              <div className="mb-3">
                <label htmlFor="username" className="form-label" >Usuario</label>
                <input type="text" className="form-control" id="username" onChange={e=> Uuser(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" onChange={e=> Upass(e.target.value)} />
              </div>
              <button onClick={e=> submit(e)} className="btn btn-primary">Iniciar sesión</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
