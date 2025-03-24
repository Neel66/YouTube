const initialState = {
    userToken: null,  // Should match useSelector in AppNavigator.js
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, userToken: action.payload };
      case 'LOGOUT':
        return { ...state, userToken: null };
      default:
        return state;
    }
  };
  
  export default authReducer;
  