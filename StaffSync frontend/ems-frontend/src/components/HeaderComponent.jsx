import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <h3 className='text-white bg-dark' style={{marginLeft: '10px'}}>StaffSync</h3>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item" style={{marginLeft: '20px'}}>
                      <NavLink className='nav-link' to='/' >Employees</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className='nav-link' to='/departments'>Departments</NavLink>
                    </li>
                  </ul>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent