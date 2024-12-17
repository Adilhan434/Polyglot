import React from 'react'
import Polyglot from './Polyglot.png'




const Header = () => {
  return (
    <div>
      <img src={Polyglot} alt="404.not found"  className='LovelyLogo' />
      <button className='btn1' onClick={alert('uploading soon')}>Войти</button>
    </div>
  )
}

export default Header
