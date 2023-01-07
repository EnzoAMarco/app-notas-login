import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [logged, Ulogged] = useState(false)
  const [user, Uuser] = useState('')

  useEffect(() => {
    fetch('/api/isLogged')
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if (data.status){ 
        Ulogged(true) 
        Uuser(data.user) 
      } 
      else{
        Ulogged(false)
      }

    })
    console.log(user);
  }, [])

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Anotador</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to='/' >Home</Link>
            </li>
            {logged ?             
            <li className="nav-item">
              <a href='/login' className="nav-link">{user}</a>
            </li>
            : 
            <>
              <li className="nav-item">
                <Link className="nav-link" to='/register' >Registrate</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/login' >Inicia sesión</Link>
              </li>
            </>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

