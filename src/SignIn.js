import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';


const SignIn = (props) => {

const [formState, setFormState] = useState({
    username:'',
    password:''
});

const [isLoggingIn, setLogIn] = useState(false)

const handleChange = (e) => {
    e.persist();
    const newFormState = {
        ...formState,
        [e.target.name]: e.target.value
    }
    setFormState(newFormState)
}

const signUserIn = (e) => {
    setLogIn(true)
    e.preventDefault();
    e.persist();

    axios
    .post('https://srp-my-garage.herokuapp.com/api/auth/login', formState)
    // .post('http://localhost:5000/api/auth/login', formState)
    .then((res) => {
        console.log(res)
        localStorage.setItem('auth-token', res.data.token)
        localStorage.setItem('userId', res.data.id)
        setLogIn(false)
        props.history.push('/dashboard')
    })
    
}

    return (<>

        {isLoggingIn ? (

            <div className='spinner-container'>
                <div className="spinner-border" role='status' />
                <div>Initial login can take up to a minute, please bear with us :)</div>
            </div>

        ) : (
    
            <div className='form-container'>
                <Form className='form' onSubmit={signUserIn}>

                    <div className='form-title'>Sign In</div>
                
                    <Form.Group>
                        <Form.Label className='form-label'>Username</Form.Label>
                        <Form.Control type="text" name='username' value={formState.username} onChange={handleChange} placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className='form-label'>Password</Form.Label>
                        <Form.Control type="password" name='password' value={formState.password} onChange={handleChange} placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <br/>
                    <div className='form-link'>
                        <Link className='form-link' to='/register'>New? Register Here</Link>
                    </div>
                    
                </Form>
            </div>
        )}
    </>);
}

export default SignIn;