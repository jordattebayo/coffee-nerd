import React, { useContext, useEffect } from 'react';
import './logList.sass'
import { Log } from './Log';

import { GlobalContext } from '../context/GlobalState';

export const LogList = () => {
  const { logs } = useContext(GlobalContext);

/*   useEffect(() => {
     getLogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  return (
    <div className="container">
        <div className="title">
            <h3>Past Recipes</h3>
        </div>
        <ul className="list">
            {logs.map(log => (<Log key={log.id} log={log} />))}
        </ul>
    </div>
  )
}

export default LogList