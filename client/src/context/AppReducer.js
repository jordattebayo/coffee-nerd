export default (state, action) => {
    switch(action.type) {
      case 'GET_LOGS':
        return {
          ...state,
          loading: false,
          logs: action.payload
        }
      case 'DELETE_LOG':
        return {
          ...state,
          logs: state.logs.filter(log => log._id !== action.payload)
        }
      case 'ADD_LOG':
        return {
          ...state,
          logs: [...state.logs, action.payload]
        }
      case 'LOG_ERROR':
        return {
          ...state,
          error: action.payload
        }
      default:
        return state;
    }
  }