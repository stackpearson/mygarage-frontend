import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button'
// import FormControl from 'react-bootstrap/FormControl';
// import Nav from 'react-bootstrap/Nav';

import { Navbar, Nav } from 'react-bootstrap';


const Mynav = props => {

    return (<>

<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">myGarage</Navbar.Brand>
      <Nav className='flex-center'>
        <Nav.Link href='#home'>Home</Nav.Link>
        <Nav.Link href='#home'>Home</Nav.Link>
        <Nav.Link href='#home'>Home</Nav.Link>
      </Nav>
  </Navbar>

    </>)
}

export default Mynav;


