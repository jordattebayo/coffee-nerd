import React, { useContext } from 'react';
import './logList.sass'

import { GlobalContext } from '../context/GlobalState';

export const Stats = () => {
  const { logs } = useContext(GlobalContext);

/*   useEffect(() => {
     getLogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */


  return (
    <div className="container">
        <div className="title">
            <h3>Statistics</h3>
        </div>
        <ul className="list">
            <li>
                Total Cups: {logs.length}
            </li>
        </ul>
    </div>
  )
}

export default Stats