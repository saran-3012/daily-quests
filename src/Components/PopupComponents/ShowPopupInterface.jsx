import React from 'react';
import {useAllContext} from '../../App';
import ShowPopupForm from './ShowPopupForm';
import ShowPopupTaskDetails from './ShowPopupTaskDetails';
import ShowPopupDeleteTask from './ShowPopupDeleteTask';
import '../../Styles/ShowPopupInterface.css';

const ShowPopupInterface = () => {
  const StatesAndFunctions = useAllContext();
  return (
    <div className='popupinterface_container' onClick={() => StatesAndFunctions.changePopupMessageBox('', {})}>
        <div className='showtaskdetails_inner_container ' onClick={(e) => e.stopPropagation()}>
          <button className='exit_popup_button' onClick={() => StatesAndFunctions.changePopupMessageBox('', {})}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>
          </button>
          {
            (StatesAndFunctions.currentPopupMessage==="add-task" || StatesAndFunctions.currentPopupMessage==="update-task")?
            <ShowPopupForm />:
            (StatesAndFunctions.currentPopupMessage==="show-task")?
            <ShowPopupTaskDetails />:
            (StatesAndFunctions.currentPopupMessage==="delete-task")?
            <ShowPopupDeleteTask />:<></>
          }
        </div>
    </div>
  )
};

export default ShowPopupInterface;