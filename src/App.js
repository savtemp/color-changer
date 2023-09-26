import './App.css';
import React from 'react';
import { useState } from 'react';
import ColorForm from './Components/ColorForm.js';
import ColorBox from './Components/ColorBox.js';

function App() {

  const [color, setColor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('submitting form', color)
  }

  return (
    <div className="container-fluid" >
      <div className="App row justify-content-center align-items-center">

        <div className="col-12">

          {/* COLOR BOX */}
          <ColorBox
            color={color}
          />

          {/* COLOR INPUT */}
          <ColorForm
            color={color}
            handleSubmit={handleSubmit}
            setColor={setColor}
          />

        </div>

      </div>
    </div>
  );
}

export default App;
