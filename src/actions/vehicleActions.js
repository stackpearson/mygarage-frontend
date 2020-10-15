export const setVehicles = userVehicles => {
    return {type: 'SET_VEHICLES', payload: userVehicles}

}

export const addVehicle = userVehicle => {
    return {type: 'ADD_VEHICLE', payload: userVehicle}
}

export const removeVehicle = userVehicle => {
    return {type: 'REMOVE_VEHICLE', payload: userVehicle}
}