import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import axios from 'axios'
import {useHistory} from 'react-router-dom';
import {useParams} from 'react-router-dom';

function AddService({ vehicleId }) {

    let params = useParams();
    let history = useHistory();

    const [formState, setFormState] = useState([
        
        {
            service_name: '',
            service_date: '',
            service_mileage: '',
            next_service_date: '',
            next_service_mileage: '',
            service_notes: '',
        },

        {
            vehicle_id: params.vehicleId
        }

    ]);

    const handleChange = (e) => {
        e.persist();
        const newFormState = {
            ...formState,
            [e.target.name]: e.target.value
        }
        setFormState(newFormState)
    }

    const addService = (e) => {
        e.preventDefault();
        e.persist();

        let config = {
            headers:{'Authorization': `Bearer ${localStorage.getItem('auth-token')}`}
        }

        axios
        .post('https://srp-my-garage.herokuapp.com/api/services', formState, config)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
        
    }

    const closeForm = (props) => {
        history.goBack();
    }

        return (<> 
        
            <div className='form-container'>
                <Form className='form' onSubmit={addService}>

                    <div className='form-title vehicle'>Add A Service<span onClick={() => {closeForm()}} className='close'>X</span></div>
                    
                
                    <Form.Group>
                        <Form.Label className='form-label'>Service</Form.Label>
                        <Form.Control type="text" name='service_name' value={formState.service_name} onChange={handleChange} placeholder="*What service was done?" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className='form-label'>Date</Form.Label>
                        <Form.Control type="date" name='service_date' value={formState.service_date} onChange={handleChange} placeholder="When was this service done?" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className='form-label'>Mileage</Form.Label>
                        <Form.Control type="number" name='service_mileage' value={formState.service_mileage} onChange={handleChange} placeholder="*At what mileage was this service performed?" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className='form-label'>Next Due Date</Form.Label>
                        <Form.Control type="date" name='next_service_date' value={formState.next_service_date} onChange={handleChange} placeholder="When if this service due again?" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className='form-label'>Next Mileage Due</Form.Label>
                        <Form.Control type="number" name='next_service_mileage' value={formState.next_service_mileage} onChange={handleChange} placeholder="*What mileage should you do this service again?" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className='form-label'>Notes</Form.Label>
                        <Form.Control type="text" name='service_notes' value={formState.service_notes} onChange={handleChange} placeholder="Enter any notes you want here" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <br/>
                    
                </Form>
            </div>
        
        </>);

    }

export default AddService;