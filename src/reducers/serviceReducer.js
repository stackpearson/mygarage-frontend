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

            default: return state;
    }
}