import React, { useState } from 'react'


function Convert() {

  const [celsius, setCelsius] = useState();
  const [fahrenheit, setFahrenheit] = useState(null);
  const [kelvin, setKelvin] = useState(null);

  const convertF = () => {
    
    const f = (celsius * 9/5) + 32;
        
    setFahrenheit(f.toFixed(2));
      };
  const convertK = () => {
    
        const k = celsius + 273.15;
    
      setKelvin(k.toFixed(2));
  };

  return (
    <>
      <div className='container'>
        <h1 style={{
          textAlign: 'center',
          backgroundColor: 'violet',
          color: 'blueviolet',
          fontWeight: 'bold'
          
        }} 
        >Celcius Dönüştür</h1>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#4CE397',
          padding: '10px'
        }}> 
        <label htmlFor="celsius">Celsius:</label>
        <input
          type="number"
          id="celsius"
          placeholder='Enter Celsius'
          value={celsius}
          onChange={(e) => setCelsius(parseFloat(e.target.value))}
        />
        <br />
        
        <button  onClick={convertF}>Fahrenheit</button>
        <button onClick={convertK}>Kelvin</button>
        </div>
        <hr />
        <div style={{
          backgroundColor:'violet',
          textAlign:'center'
        }}
        
        >
     <div id='result'>
          {fahrenheit && <p>Fahrenheit: {fahrenheit}</p>}
        </div>
        <div id='result'>
          {kelvin && <p>Kelvin: {kelvin}</p>}
 
        </div>
        </div>
      </div>
     
      
    </>
  )
}

export default Convert