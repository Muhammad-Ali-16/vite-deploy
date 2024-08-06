import React from 'react'
import NavContent from './NavContent';

function NavOverlay() {

  const HandleCloseBtn = () => {
    let overlayMain = document.querySelector('.nav-overlay-main');
    let overlayContent = document.querySelector('.overlay-content');
    let overlayBtn = document.querySelector('.overlay-close-btn');
    

    overlayContent.classList.remove('active');
    overlayBtn.classList.remove('active');
    overlayContent.classList.add('hidden');
    overlayBtn.classList.add('hidden');
    overlayMain.style.width = '0';

  }

  return (
    <nav className='nav-overlay-main'>
      <button className='overlay-close-btn hidden' onClick={HandleCloseBtn}><i className="bi bi-x-circle"></i></button>
      <div className="overlay-content hidden">
        <NavContent />
      </div>
    </nav>
  )
}

export default NavOverlay;