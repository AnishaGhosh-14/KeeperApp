import React from 'react'
import './Style.css';

export default function Footer() {
    const currentYear=new Date().getFullYear();
  return (
    <div className='footer'>
      <p>Copyright © Anisha Ghosh {currentYear}</p>
    </div>
  )
}
