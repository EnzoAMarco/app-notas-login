import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [logged, Ulogged] = useState(false)
  const [user, Uuser] = useState('')
  // const [logRefresh, UlogRefresh] = useState(false)

  useEffect(() => {
    fetch('/api/isLogged')
    .then(res => res.json())
    .then(data =>{
      if (data.status){ 
        Ulogged(true); 
        Uuser(()=>data.user)
      }  
      else Ulogged(false)
    })
    console.log(1);
  }, [logged])

  const logout = (e) => {
    e.preventDefault()
    fetch('/api/logout/')
    .then(res => res.json())
    .then(data =>data.status === 1 ? Ulogged(!logged) : null)
    document.location.replace('/login')
  }

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
            <>          
              <li className="nav-item">
                <span className="nav-link">{user}</span>
              </li>
              <li className="nav-item">
                <span className="nav-link" style={{cursor: 'pointer'}} onClick={e=> logout(e)}>Logout</span>
              </li>
            </> 
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

