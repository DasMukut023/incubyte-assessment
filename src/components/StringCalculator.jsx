import React , {useState} from "react";
import {addFn} from "../utils/stringCalculator"

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
        <>
          <textarea 
             placeholder="Enter numbers to be added"
             value={input}
             onChange={(e)=>setInput(e.target.value)}
             />

             <button onClick={()=>handleCalculate()}>Calculate</button>
             {result !==null && <p>Result: {result}</p>}
             {error && <p>{error}</p>}
        </>
    )
}

export default StringCalculator;