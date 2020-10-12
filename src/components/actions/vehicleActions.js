export const setVehicles = userVehicles => {
    return {type: 'SET_VEHICLES', payload: userVehicles}

}

export const addVehicle = userVehicle => {
    return {type: 'ADD_VEHICLE', payload: userVehicle}
}