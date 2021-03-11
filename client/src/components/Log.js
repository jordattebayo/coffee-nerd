import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Log = ({ log }) => {
  const { deleteLog } = useContext(GlobalContext);
  const { text, water, coffee, method, brewBody, brewBalance, brewAcidity, brewSweetness, brewCleanness, brewAftertaste } = log

  return (
    <li> {method} | <span>Water: {water}g</span> | <span>Coffee: {coffee}g</span> | <span>Body: {brewBody}g</span> | <span>Balance: {brewBalance}g</span> | <span>Acidity: {brewAcidity}g</span> | <span>Sweetness: {brewSweetness}g</span> | <span>Cleanness: {brewCleanness}g</span> | <span>Aftertaste: {brewAftertaste}g</span> | <span>{text}</span> <button onClick={() => deleteLog(log._id)} className="delete-btn">x</button></li>
  )
}

export default Log