export const setServices = userServices => {
    return {type: 'SET_SERVICES', payload: userServices}

}

export const addService = userService => {
    return {type: 'ADD_SERVICE', payload: userService}

}