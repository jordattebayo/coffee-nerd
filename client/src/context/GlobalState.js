import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
  logs: [],
  error: null,
  loading: true
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getLogs() {
    try {
      const res = await axios.get('/api/v1/logs');

      dispatch({
        type: 'GET_LOGS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'LOG_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function deleteLog(id) {

    try {
      await axios.delete(`/api/v1/logs/${id}`);

      dispatch({
        type: 'DELETE_LOG',
        payload: id
      });
    } catch (err) {
      
    }
  }

  async function addLog(log) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/v1/logs', log, config);

      dispatch({
        type: 'ADD_LOG',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'LOG_ERROR',
        payload: err.response.data.error
      });
    }
  }

  return (
    <GlobalContext.Provider value={{
        logs: state.logs,
        error: state.error,
        loading: state.loading,
        getLogs,
        deleteLog,
        addLog
    }}>
        {children}
    </GlobalContext.Provider>
  );
}