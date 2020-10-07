import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button'
// import FormControl from 'react-bootstrap/FormControl';
// import Nav from 'react-bootstrap/Nav';

import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';


const Mynav = props => {

    return (<>

<Navbar bg="dark" variant="dark">
    <Navbar.Brand><Link className='link-title' to='/dashboard'>myGarage</Link></Navbar.Brand>
      <Nav>
        <Nav.Link><Link className='undecorated-link'>Add Vehicle</Link></Nav.Link>
        <Nav.Link><Link className='undecorated-link'>Add Service</Link></Nav.Link>
        <Nav.Link><Link className='undecorated-link'>Logout</Link></Nav.Link>
      </Nav>
  </Navbar>

    </>)
}

export default Mynav;


