import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Register = (props) => {

const [formState, setFormState] = useState({
    username:'',
    password:''
});

const [isRegistering, setRegister] = useState(true);

const handleChange = (e) => {
    e.persist();
    const newFormState = {
        ...formState,
        [e.target.name]: e.target.value
    }
    setFormState(newFormState)
}

const registerUser = (e) => {
    setRegister(true)
    e.preventDefault();
    e.persist();

    axios
    .post('https://srp-my-garage.herokuapp.com/api/auth/register', formState)
    .then((res) => {
        console.log(res)
        localStorage.setItem('auth-token', res.data.token)
        localStorage.setItem('userId', res.data.id)
        setRegister(false)
        props.history.push('/dashboard')
    })
}

    return (<> 

        {isRegistering ? (

            <div className='spinner-container'>
                <div className="spinner-border" role='status' >
                    <span className='visually-hidden'></span>
                </div>
                <div>Initial registration can take up to a minute, please bear with us :)</div>
            </div>

        ) : (



    
            <div className='form-container'>
                <Form className='form' onSubmit={registerUser}>

                    <div className='form-title'>Register</div>
                
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
                        <Link className='form-link' to='/'>Already Registered? Sign In Here</Link>
                    </div>
                </Form>
            </div>
            )}
    
    </>);

}

export default Register;