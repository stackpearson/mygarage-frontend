export const initialState = {
    userServices: []
}

export const serviceReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_SERVICES':
            return {
                ...state,
                userServices: action.payload
            }

        case 'ADD_SERVICE':
            return {
                ...state,
                userServices: state.userServices.concat(action.payload)
            };

        case 'REMOVE_SERVICE':
            return {
                ...state,
                userServices: state.userServices.filter(service => {
                    if (service.id !== action.payload) {
                        return {
                            service
                        }
                    }
                })
            };

            default: return state;
    }
}