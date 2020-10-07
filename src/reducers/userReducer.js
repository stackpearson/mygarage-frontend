export const initialState = {
    isLoggedIn: false,
    userInfo: {}
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                isLoggedIn: true,
                userInfo: action.payload
            };

            default: return state;
    }
}