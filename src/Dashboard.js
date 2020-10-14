import React, {useEffect, useState} from 'react';
import {axiosWithAuth} from './utils/axiosWithAuth';
import {connect} from 'react-redux'
import {setVehicles} from './actions/vehicleActions';
import AddVehicle from './AddVehicle';
import {setServices} from './actions/serviceActions';
import {Alert} from 'react-bootstrap';
import Vehicle from './Vehicle'


const Dashboard = (props) => {

    // const [vehicles, setVehicles] = useState([])

    
    //    let unique = 
    //    console.log('unique', unique)

    //    if (unique[0]) {
    //     props.setVehicles(unique)
    //    }

      
    

    

    

    useEffect(() => {
        axiosWithAuth()
        .get(`/vehicles/${localStorage.getItem('userId')}`)
        .then((res) => {
            console.log(res.data)
            props.setVehicles(res.data)
            setVehicles(res.data)
        })
        .catch((err) => {
            console.log(err)
        })

    }, [])

    useEffect(() => {
        axiosWithAuth()
        .get(`/services/${localStorage.getItem('userId')}`)
        .then((res) => {
            console.log(res)
            props.setServices(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])


    return(<>
    
        { props.vehiclesOnProps.userVehicles[0] ? (

           <><h2>Your Garage</h2>
            <div className='vehicle-container'>
            { props.vehiclesOnProps.userVehicles.map(vehicle => {
                return (
                    <Vehicle key={vehicle.id} vehicleId={vehicle.id} services={props.serviceOnProps.userServices} vehicle={vehicle} />
                )
            })
            
            }

            </div></>

        ) : (

            <><Alert variant='dark'>
                <p>Looks like your garage is empty, let's add a vehicle.</p>
            </Alert>

            <AddVehicle /></>
        )}
    
    </>);
}

const mapStateToProps = state => {
    return {
        vehiclesOnProps: state.vehicleReducer,
        serviceOnProps: state.serviceReducer
    }
}

export default connect(
    mapStateToProps,
    {setVehicles, setServices}
)(Dashboard)