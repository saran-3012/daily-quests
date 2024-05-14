import React, {useState} from 'react';
import {useAllContext} from '../../App';
import '../../Styles/ShowPopupBox.css';

const ShowPopupUsernameForm = () => {
  const StatesAndFunctions = useAllContext();
  const [userName, setUserName] = useState(localStorage.getItem('userName')||'');
  const handleUsernameFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', userName);
    StatesAndFunctions.changePopupMessageBox('', {});
  };
  return (
    <div className='popup_container_wrapper'>
      <h2 className='popup_container_header'>Your Name</h2>
      <form className='popup_container_inner_wrapper'>
      <div className='popup_inner_boxes' >
          <label htmlFor="username_input">User Name</label>
          <input type="text" name="user_name" id="username_input" placeholder='Your name' defaultValue={userName} onChange={(e) => setUserName(e.target.value)}/>
      </div>
      <button type="submit" id="popupform_submit_btn" className='popup_btn' onClick={handleUsernameFormSubmit}>Save</button>
      </form>
    </div>
  )
};

export default ShowPopupUsernameForm;