import React, {useEffect} from 'react';
import {axiosWithAuth} from './axiosWithAuth';
import {connect} from 'react-redux'
import {setVehicles} from './actions/vehicleActions';
import {setServices} from './actions/serviceActions';
import {Alert} from 'react-bootstrap';
import Vehicle from './Vehicle';



const Dashboard = (props) => {

    const { setVehicles } = props;
    const { setServices } = props;

    useEffect(() => {
        axiosWithAuth()
        .get(`/vehicles/${localStorage.getItem('userId')}`)
        .then((res) => {
            props.setVehicles(res.data)
        })
        .catch((err) => {
            console.log(err)
        })

    }, [setVehicles])

    useEffect(() => {
        axiosWithAuth()
        .get(`/services/${localStorage.getItem('userId')}`)
        .then((res) => {
            // console.log(res)
            props.setServices(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [setServices])


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
                <p>Looks like your garage is empty, get started by adding a vehicle.</p>
            </Alert></>


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