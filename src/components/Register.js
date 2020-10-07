import React, {useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Register = (props) => {

const [formState, setFormState] = useState({
    username:'',
    password:''
});

const handleChange = (e) => {
    e.persist();
    const newFormState = {
        ...formState,
        [e.target.name]: e.target.value
    }
    setFormState(newFormState)
}

const registerUser = (e) => {
    e.preventDefault();
    e.persist();

    axios
    .post('http://localhost:5000/api/auth/register', formState)
    .then((res) => {
        console.log(res)
        localStorage.setItem('auth-token', res.data.token)
    })
}

    return (<> 
    
        <div className='form-container'>
            <Form className='form' onSubmit={registerUser}>

                <div className='form-title'>Register</div>
            
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className='form-label'>Username</Form.Label>
                    <Form.Control type="text" name='username' value={formState.username} onChange={handleChange} placeholder="Enter username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className='form-label'>Password</Form.Label>
                    <Form.Control type="password" name='password' value={formState.password} onChange={handleChange} placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br/>
                <div className='form-link'>
                    <Link className='form-link' to='/'>Already Registered? Sign In Here</Link>
                </div>
            </Form>
        </div>
    
    </>);

}

export default Register;