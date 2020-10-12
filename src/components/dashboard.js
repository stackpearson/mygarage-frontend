import React from 'react';
import {useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {connect} from 'react-redux'
import {setVehicles} from './actions/vehicleActions';
import AddVehicle from './AddVehicle';
import {Alert} from 'react-bootstrap';


const Dashboard = (props) => {

    

    useEffect(() => {
        axiosWithAuth()
        .get(`/vehicles/${localStorage.getItem('userId')}`)
        .then((res) => {
            console.log(res.data)
            props.setVehicles(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return(<> 
    
        <div className='vehicle-container'>
        { props.vehiclesOnProps.userVehicles[0] ? (

           <><h2>Your Vehicles</h2>

            { props.vehiclesOnProps.userVehicles.map(vehicle => {
                return (
                    <div classnme="mapped-vehicle">
                        <p>{vehicle.vehicle_year} {vehicle.vehicle_make} {vehicle.vehicle_model}</p>
                    </div>
                )
            })
            
            }</>



        ) : (

            <><Alert variant='dark'>
                <p>Looks like your garage is empty, let's add a vehicle.</p>
            </Alert>

            <AddVehicle /> </>
            

        )}
            
        </div>
    
    </>);
}

const mapStateToProps = state => {
    return {
        vehiclesOnProps: state.vehicleReducer
    }
}

export default connect(
    mapStateToProps,
    {setVehicles}
)(Dashboard)