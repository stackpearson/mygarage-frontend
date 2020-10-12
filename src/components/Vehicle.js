import React, {useState} from 'react';
import {Link} from 'react-router-dom';


const Vehicle = (props) => {
    let filteredServices = props.services.filter(services => services.id = props.vehicle.id)
    const [vehicleServices] = useState(filteredServices);

    


    return(<> 

            <div className='mapped-vehicle'>
                <div className='vehicle-interface'>
                    
                    <div className='vehicle'><h3>{props.vehicle.vehicle_year} {props.vehicle.vehicle_make} {props.vehicle.vehicle_model}</h3></div>
                    <div className='service'><Link className='undecorated-link car' to={`/add-service/${props.vehicle.id}`}>+ Service</Link></div>
                </div>              
            </div>
    
    </>)


}

export default Vehicle