import React, { useState, useContext } from "react"
import { GlobalContext } from '../context/GlobalState'
import './addLog.sass'

const Log = () => {
    const [text, setText] = useState('');
    const [coffee, setCoffee] = useState(0);
    const [water, setWater] = useState(0);
    const [method, setMethod] = useState('');
    const [brewBody, setbrewBody] = useState('[]');
    const [brewBalance, setbrewBalance] = useState('[]');
    const [brewAcidity, setbrewAcidity] = useState('[]');
    const [brewSweetness, setbrewSweetness] = useState('[]');
    const [brewCleanness, setbrewCleanness] = useState('[]');
    const [brewAftertaste, setbrewAftertaste] = useState('[]');


    const { addLog } = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();
  
      const newLog = {
        id: Math.floor(Math.random() * 100000000),
        method,
        water: +water,
        coffee: +coffee,
        text,
        brewBody: +brewBody,
        brewBalance: +brewBalance,
        brewAcidity: +brewAcidity,
        brewSweetness: +brewSweetness,
        brewCleanness: +brewCleanness,
        brewAftertaste: +brewAftertaste
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
                    <label htmlFor="amount">Water (Farenheit)</label>
                    <input type="number" value={water} onChange={(e) => setWater(e.target.value)} placeholder="Enter amount..." />
                    </div>
                    <div className="form-control">
                    <label htmlFor="amount">Coffee (grams)</label>
                    <input type="number" value={coffee} onChange={(e) => setCoffee(e.target.value)} placeholder="Enter amount..." />
                    </div>
                    <div className="form-control">
                    <label htmlFor="amount">Body<br/>
                        <input type="number" value={brewBody} onChange={(e) => setbrewBody(e.target.value)} placeholder="How was the body?" />
                    </label>
                    </div>
                    <div className="form-control">
                    <label htmlFor="amount">Balance<br/>
                        <input type="number" value={brewBalance} onChange={(e) => setbrewBalance(e.target.value)} placeholder="How was the balance?" />
                    </label>
                    </div>
                    <div className="form-control">
                    <label htmlFor="amount">Acidity<br/>
                        <input type="number" value={brewAcidity} onChange={(e) => setbrewAcidity(e.target.value)} placeholder="How was the acidity?" />
                    </label>
                    </div>
                    <div className="form-control">
                    <label htmlFor="amount">Sweetness<br/>
                        <input type="number" value={brewSweetness} onChange={(e) => setbrewSweetness(e.target.value)} placeholder="How was the sweetness?" />
                    </label>
                    </div>
                    <div className="form-control">
                    <label htmlFor="amount">Cleanness<br/>
                        <input type="number" value={brewCleanness} onChange={(e) => setbrewCleanness(e.target.value)} placeholder="How was the cleanness?" />
                    </label>
                    </div>
                    <div className="form-control">
                    <label htmlFor="amount">Aftertaste<br/>
                        <input type="number" value={brewAftertaste} onChange={(e) => setbrewAftertaste(e.target.value)} placeholder="How was the aftertaste?" />
                    </label>
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