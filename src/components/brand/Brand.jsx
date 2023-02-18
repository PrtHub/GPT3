import React from 'react'
import './brand.css'
import companies from '../../assects/Companies-Logo.png';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div className='gpt3__brand-images'>
           <img src={companies} alt="companies-logo" />
      </div>
    </div>
  )
}

export default Brand
