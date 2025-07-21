import React , {useState} from "react";
import {addFn} from "../utils/stringCalculator"
import "../StringCalculator.css"
const StringCalculator =()=>{
    const [input, setInput] = useState("");
    const [result, setResult] =useState(null);
    const [error, setError] = useState("");

    const handleCalculate=()=>{
        try {
            const sum= addFn(input);
            setResult(sum);
            setError("")
        } catch (error) {
            setError(error.message)
            setResult(null)
        }
    }

    return (
        <div className="container">
            <h3>String Calculator</h3>
          <textarea 
             placeholder="Enter numbers to be added"
             value={input}
             onChange={(e)=>setInput(e.target.value)}
             />

             <button onClick={()=>handleCalculate()}>Calculate</button>
             {result !==null && <p className="result">Result: {result}</p>}
             {error && <p className="error">{error}</p>}
        </div>
    )
}

export default StringCalculator;