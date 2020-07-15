export default function Account(state = {
    isLogged: false,
    loading: false,
    currentUser: {},
    token: '',
    refreshToken: ''
}, 
action: any){
    switch(action.type){
        case 'SET_IS_LOGGED':
            return {
                ...state,
                isLogged: action.isLogged,
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.loading,
            };
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.currentUser,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_REFRESH_TOKEN':
            return {
                ...state,
                refreshToken: action.refreshToken,
            };  
        default:
            return state;
    }
}