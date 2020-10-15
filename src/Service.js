import React from 'react';

const Service = (props) => {


    return (<>

            <h3>{props.service.service_name}</h3>
            <div className='service-container'>
                <div className='service-pairs'>
                    <p>Mileage performed: <span className='service-entry'>{props.service.service_mileage}</span></p>
                    <p>Mileage due next: <span className='service-entry'>{props.service.next_service_mileage}</span></p>
                    <p>Date of service: <span className='service-entry'>{props.service.service_date}</span></p>
                    <p>Next service date: <span className='service-entry'>{props.service.next_service_date}</span></p>
                </div>
                <p>notes: {props.service.service_notes}</p>
            </div>


    </>)
}

export default Service;