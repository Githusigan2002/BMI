import { useState } from 'react'

import './App.css'

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const Clear = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setStatus("");  
  };

  const CalBMI = () => {

    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if (isValidHeight && isValidWeight) {
      const heightInM = height / 100;
      const BMI = weight / (heightInM * heightInM);
      setBmi(BMI.toFixed(2));
      if (BMI < 8.5) {
        setStatus("Under Weight");
      }
      else if (BMI >= 18.5 && BMI < 24.9) {
        setStatus("Normal");
      }

      else if (BMI >= 25 && BMI < 29.9) {
        setStatus("Over Weight");
      }

      else {
        setStatus("Obese")
      }
      setErrorMsg("");

    }
    else {
      setBmi(null);
      setStatus("");
      setErrorMsg("Please Enter numeric value");
    }
  };

  return (
    <>
      <div className='bmi-container'>
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          {errorMsg && <p className='error'>{errorMsg}</p>}
          <div className="input-container">
            <label htmlFor="height" >Height (cm)</label>
            <input onChange={(e) => setHeight(e.target.value)} type="text" value={height} name="" id="height" />
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight (Kg)</label>
            <input onChange={(e) => setWeight(e.target.value)} type="text" value={weight} name="" id="weight" />
          </div>
          <button onClick={CalBMI} className='btn btn-cal'>Calculate BMI</button>
          <button onClick={Clear} className='btn btn-clear'>Clear</button>
          {bmi !== null && (
            <div className="results">
              <p>Your BMI is {bmi}</p>
              <p>Status : {status}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
