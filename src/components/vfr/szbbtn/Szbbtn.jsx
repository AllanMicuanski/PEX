import React from 'react'
import './Szbbtn.css'

const Szbbtn = () => {
  return (
    <div className='vfr-btns-container'>
      <button className='vfr-btn'>
        <span className='icon' aria-hidden='true'></span>
        Provador Virtual
      </button>
      <button className='chart-btn'>
        <span className='icon' aria-hidden='true'></span>
        Tabela de Medidas
      </button>
    </div>
  )
}

export default Szbbtn
