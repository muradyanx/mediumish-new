import React from 'react';
import './style.scss';

function Nav() {
  return (
    <div className='nav'>
    <div className='nav-centr'>
        <div className='nav-logo'>m</div>
  
        <div className='nav-items'>
            <p className='nav-list one' >Stories</p>
            <p className='nav-list'>Post</p>
            <p className='nav-list'>Author</p>
            <input type='text' placeholder=' Search'className='nav-input' />
        </div>
       </div> 
    </div>
    
  )
}

export default Nav