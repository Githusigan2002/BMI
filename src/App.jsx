import { useState } from 'react'

import './App.css'

function App() {
  const [height, setHeight] = useState("178");
  const [weight, setWeight] = useState("70");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  return (
    <>
      <div className='bmi-container'>
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          <div className="input-container">
            <label htmlFor="height" >Height</label>
            <input type="text" value={height} name="" id="height" />
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight</label>
            <input type="text" value={weight} name="" id="weight" />
          </div>
          <button className='btn'>Calculate BMI</button>
          <div className="results">
            <p>Your BMI is 23.2</p>
            <p>Status : Normal</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
