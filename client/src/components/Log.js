import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Log = ({ log }) => {
  const { deleteLog } = useContext(GlobalContext);
  const { text, water, coffee, method } = log

  return (
    <li>
      {method} | <span>Water: {water}g</span> | <span>Coffee: {coffee}g</span> | <span>{text}</span><button onClick={() => deleteLog(log._id)} className="delete-btn">x</button>
    </li>
  )
}

export default Log