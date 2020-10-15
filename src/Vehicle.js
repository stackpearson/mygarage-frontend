import React from 'react';
import {Link} from 'react-router-dom';
import {Accordion, Card, Button} from 'react-bootstrap';
import Service from './Service';


const Vehicle = (props) => {
 
    let services = props.services.filter(service => service.vehicle_id === props.vehicle.id)

    return(<> 

     
            <div className='mapped-vehicle'>
                <Accordion>
                    <Card key={`vehicle-card${props.vehicle_id}`}>
                        <Card.Header>
                            <div className='vehicle-interface'>
                                <div className='vehicle'><h3>{props.vehicle.vehicle_year} {props.vehicle.vehicle_make} {props.vehicle.vehicle_model}</h3></div>
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

export default Vehicle