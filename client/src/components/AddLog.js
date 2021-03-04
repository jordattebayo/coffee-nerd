import React, { useState, useContext } from "react"
import { GlobalContext } from '../context/GlobalState'
import './addLog.sass'

const Log = () => {
    const [text, setText] = useState('');
    const [coffee, setCoffee] = useState(0);
    const [water, setWater] = useState(0);
    const [method, setMethod] = useState('');

    const { addLog } = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();
  
      const newLog = {
        id: Math.floor(Math.random() * 100000000),
        method,
        water: +water,
        coffee: +coffee,
        text,
      }
      addLog(newLog);
    }

    return (
        <div className="container">
            <div className="log-form">
                <h3>Log new recipe</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-control">
                        <label>
                            Brewing method:
                            <select value={method} onChange={(e) => setMethod(e.target.value)}>
                                <option >Choose method</option>
                                <option value="Immersion">Immersion</option>
                                <option value="Percolation">Percolation</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control">
                    <label htmlFor="amount">Water (grams)</label>
                    <input type="number" value={water} onChange={(e) => setWater(e.target.value)} placeholder="Enter amount..." />
                    </div>
                    <div className="form-control">
                    <label htmlFor="amount">Coffee (grams)</label>
                    <input type="number" value={coffee} onChange={(e) => setCoffee(e.target.value)} placeholder="Enter amount..." />
                    </div>
                    <div className="form-control">
                    <label htmlFor="text">
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter notes..." />
                    </label>
                    </div>
                    <button className="btn">Add recipe</button>
                </form>
            </div>
        </div> 
    )
}

export default Log


{/* Log wishlist
     - Temp
    - date
    - water amount
    - Coffee
        - Company
        - Roast
        - Notes
        - grind size
    - Time
        - potentially add a timeline feature
    - general preperation notes
    - preheated?
    - brew method
    - output (sliders 1-5)
        - body *slider*
        - balance
        - acidity
        - sweetness
        - cleanness
        - aftertaste 
*/}