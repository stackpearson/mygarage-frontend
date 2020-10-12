import React, {useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {connect} from 'react-redux';
import {setUser} from './actions/userActions';

const AddVehicle = (props) => {

const [formState, setFormState] = useState({
    service_name: '',
    service_date: '',
    service_mileage: '',
    next_service_date: '',
    next_service_mileage: '',
    service_notes: ''
});

const handleChange = (e) => {
    e.persist();
    const newFormState = {
        ...formState,
        [e.target.name]: e.target.value
    }
    setFormState(newFormState)
}

const signUserIn = (e) => {
    e.preventDefault();
    e.persist();

    axios
    .post('https://cors-anywhere.herokuapp.com/https://srp-my-garage.herokuapp.com/api/auth/login', formState)
    .then((res) => {
        console.log(res)
        localStorage.setItem('auth-token', res.data.token)
        props.setUser(res.data)
        props.history.push('/dashboard')
    })
    
}

    return (<> 
    
        <div className='form-container'>
            <Form className='form' onSubmit={signUserIn}>

                <div className='form-title'>Sign In</div>
            
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
                
            </Form>
        </div>
    
    </>);

}

const mapStateToProps = state => {
    return {
        userOnProps: state.userReducer,
        vehicleOnProps: state.vehicleReducer
    }
}

export default connect(
    mapStateToProps,
    {setUser}
)(AddVehicle)