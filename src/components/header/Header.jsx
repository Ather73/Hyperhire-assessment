import React from 'react'
import backArrow from '../../images/backArrow.svg';
import notification from '../../images/notification.svg';
import  "./Header.css";

const Header = () => {
  return (
    <div className='header'>
        <img src={backArrow} alt="" />
         <h4>자유톡</h4>
         <img src={notification} alt="" />
    </div>
  )
}

export default Header
