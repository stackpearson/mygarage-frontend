import React from 'react';
import {Link} from 'react-router-dom';
import {Accordion, Card, Button} from 'react-bootstrap';
import Service from './Service';
import {axiosWithAuth} from './utils/axiosWithAuth';
import {connect} from 'react-redux';
import {removeVehicle} from './actions/vehicleActions';


const Vehicle = (props) => {
 
    let services = props.services.filter(service => service.vehicle_id === props.vehicle.id)

    const deleteVehicle = async () => {

        const alertMsg = await window.confirm('Are you sure? This will delete the vehicle & all associated records')

        if (alertMsg) {
            props.removeVehicle(props.vehicle.id)
            axiosWithAuth()
            .delete(`/vehicles/${props.vehicle.id}`)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        }
        
   

    }

    return(<> 

     
            <div className='mapped-vehicle'>
                <Accordion>
                    <Card key={`vehicle-card${props.vehicleId}`}>
                        <Card.Header>
                            <div className='vehicle-interface'>
                                <div className='vehicle'><h3>
                                    <p onClick={() => {deleteVehicle()}} className='vehicle-delete'>x</p>
                                    {props.vehicle.vehicle_year} {props.vehicle.vehicle_make} {props.vehicle.vehicle_model}
                                    
                                </h3></div>
                                <div className='service'><Link className='undecorated-link car' to={`/add-service/${props.vehicle.id}`}>+ Service</Link></div>
                            </div>
                            
                        <Accordion.Toggle as={Button} variant="text" eventKey="0">
                            View Services
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            {services.map(serv => {
                                return (
                                        <Service key={`service-${serv.id}`} service={serv} />
                                )
                            })}
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
           

    
    </>)


}

const mapStateToProps = state => {
    return {
        vehiclesOnProps: state.vehicleReducer
    }
}

export default connect(
    mapStateToProps,
    {removeVehicle}
)(Vehicle)