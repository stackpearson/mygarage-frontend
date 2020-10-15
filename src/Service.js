import React from 'react';
import {connect} from 'react-redux';
import {removeService} from './actions/serviceActions';
import {axiosWithAuth} from './utils/axiosWithAuth';

const Service = (props) => {

    const removeServiceDb = () => {
        axiosWithAuth()
            .delete(`/services/${props.service.id}`)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (<>

            <h3>{props.service.service_name}</h3>
            <div className='service-container'>
                <div className='service-pairs'>
                    <span className='service-control' onClick={() => {props.removeService(props.service.id); removeServiceDb()}}>X</span>
                    <p>Mileage performed: <span className='service-entry'>{props.service.service_mileage}</span></p>
                    <p>Mileage due next: <span className='service-entry'>{props.service.next_service_mileage}</span></p>
                    <p>Date of service: <span className='service-entry'>{props.service.service_date}</span></p>
                    <p>Next service date: <span className='service-entry'>{props.service.next_service_date}</span></p>
                </div>
                <p>notes: {props.service.service_notes}</p>
            </div>


    </>)
}

const mapStateToProps = state => {
    return {
        serviceOnProps: state.serviceReducer
    }
}

export default connect(
    mapStateToProps,
    {removeService}
)(Service)