import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {addVehicle} from './actions/vehicleActions';

const AddVehicle = (props) => {

let history = useHistory();
const [formState, setFormState] = useState({
    vehicle_make: '',
    vehicle_model: '',
    vehicle_year: ''
});

const handleChange = (e) => {
    e.persist();
    const newFormState = {
        ...formState,
        [e.target.name]: e.target.value
    }
    setFormState(newFormState)
}

const addVehicle = (e) => {
    e.preventDefault();
    e.persist();

    axiosWithAuth()
    .post(`https://cors-anywhere.herokuapp.com/https://srp-my-garage.herokuapp.com/api/vehicles/${localStorage.getItem('userId')}`, formState)
    .then((res) => {
        console.log(res)
        props.addVehicle(formState)
       
    })
    
}

const closeForm = (props) => {
    history.push('/dashboard')
}

    return (<> 
    
        <div className='form-container'>
            <Form className='form' onSubmit={addVehicle}>

                <div className='form-title vehicle'>Add A Vehicle<span onClick={() => {closeForm()}} className='close'>X</span></div>
                
            
                <Form.Group>
                    <Form.Label className='form-label'>Make</Form.Label>
                    <Form.Control type="text" name='vehicle_make' value={formState.vehicle_make} onChange={handleChange} placeholder="Vehicle Make" />
                </Form.Group>

                <Form.Group>
                    <Form.Label className='form-label'>Model</Form.Label>
                    <Form.Control type="text" name='vehicle_model' value={formState.vehicle_model} onChange={handleChange} placeholder="Vehicle Model" />
                </Form.Group>

                <Form.Group>
                    <Form.Label className='form-label'>Year</Form.Label>
                    <Form.Control type="text" name='vehicle_year' value={formState.vehicle_year} onChange={handleChange} placeholder="Vehicle Year" />
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
        vehicleOnProps: state.vehicleReducer
    }
}

export default connect(
    mapStateToProps,
    {addVehicle}
)(AddVehicle)