import React from 'react';
import {useAllContext} from '../../App';
import '../../Styles/Navbar.css';
import AppLogo from '../../Images/app-logo.png';

const Navbar = () => {
  const StatesAndFunctions = useAllContext();
  return (
    <header className='navbar'>
      <div className='navbar_inner_container'>
        <button className='navbar_icon_button' onClick={StatesAndFunctions.toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"/>
          </svg>
        </button>
        <a className='navbar_app_logo' href='#' onClick={StatesAndFunctions.toggleSidebar}>
          <img src={AppLogo} alt="App Logo"/>
        </a>
      </div>
      <h2 className='username_navbar_header'>Hello <strong onClick={() => StatesAndFunctions.changePopupMessageBox('change-username', {})}>{localStorage.getItem('userName')||'There'}</strong></h2>
      <button className='navbar_icon_button' onClick={StatesAndFunctions.toggleTheme}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      </button>
    </header>
  );
};

export default Navbar;