export const initialState = {
    userVehicles: []
}

export const vehicleReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_VEHICLES':
            return {
                ...state,
                userVehicles: action.payload.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)
            }

        case 'ADD_VEHICLE':
            return {
                ...state,
                userVehicles: state.userVehicles.concat(action.payload)
            };

        case 'REMOVE_VEHICLE':
            return {
                ...state,
                userVehicles: state.userVehicles.filter(vehicle => {
                    if (vehicle.id !== action.payload) {
                        return {
                            vehicle
                        }
                    }
                })
            };

            default: return state;
    }
}