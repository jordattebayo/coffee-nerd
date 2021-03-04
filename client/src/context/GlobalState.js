import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  logs: [
    {
      id: 1,
      method: 'immersion',
      water: 100,
      coffee: 10,
      text: 'Coffee go burr',
    },
    {
        id: 2,
        method: 'percalation',
        water: 200,
        coffee: 20,
        text: 'Coffee go burrrr',
    },
  ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);


  function deleteLog(id) {
    dispatch({
      type: 'DELETE_LOG',
      payload: id
    });
  }

  function addLog(log) {
    dispatch({
      type: 'ADD_LOG',
      payload: log
    });
  }

  return (
    <GlobalContext.Provider value={{
        logs: state.logs,
        deleteLog,
        addLog
    }}>
        {children}
    </GlobalContext.Provider>
  );
}