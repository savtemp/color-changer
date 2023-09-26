import React from 'react'

function ColorBox({ color }) {


  const handleColor = () => {
    if (!color) {
      return (
        <p className='m-0'>Empty Value</p>
      )
    } else {
      return (
        <div>{color}</div>
      )
    }
  }

  return (
    <div className='color-box rounded d-flex align-items-center justify-content-center mb-3' style={{ backgroundColor: color }}>
      {/* {color} */}
      {handleColor()}
    </div>
  )
}

export default ColorBox