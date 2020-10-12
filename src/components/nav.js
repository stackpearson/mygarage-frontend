import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';



const Mynav = (props) => {

  const logOut = () => {
    localStorage.removeItem('auth-token')
  }

    return (<>

<Navbar bg="dark" variant="dark">
    <Navbar.Brand><Link className='link-title' to='/dashboard'>myGarage</Link></Navbar.Brand>
      <Nav>
        <Nav.Link><Link className='undecorated-link' to='/add-vehicle'>Add Vehicle</Link></Nav.Link>
        <Nav.Link><Link className='undecorated-link' to='/' onClick={() => {logOut()}}>Logout</Link></Nav.Link>
      </Nav>
  </Navbar>

    </>)
}

export default Mynav;


