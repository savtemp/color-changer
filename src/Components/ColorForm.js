import React from 'react'

function ColorForm({ color, handleSubmit, setColor }) {
  return (
    <form action="" onSubmit={handleSubmit}>
      <input className='form-style rounded' required maxLength={50} minLength={3} type="text" placeholder='Add color name' value={color} onChange={(e) => setColor(e.target.value)} />
    </form>

  )
}

export default ColorForm