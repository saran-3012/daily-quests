import React from 'react';
import {useAllContext} from '../../App';
import '../../Styles/ShowPopupBox.css';

const ShowPopupDeleteTask = () => {
  const StatesAndFunctions = useAllContext();
  const popupSelectedTaskDetails = StatesAndFunctions.currentSelectedTaskDetails;

  const handleDeleteTaskClick = (e, approvalStatus) => {
    e.preventDefault();
    approvalStatus && StatesAndFunctions.deleteTask(popupSelectedTaskDetails);
    StatesAndFunctions.changePopupMessageBox('', {})
  };
  return (
    <div className='popup_container_wrapper'>
      <h2 className='popup_container_header'>Confirm Deletion</h2>
      <form className='popup_container_inner_wrapper'>
        <div className='popup_inner_boxes'>
            <p>Are you sure you want to delete? <strong onClick={() => StatesAndFunctions.changePopupMessageBox('show-task', popupSelectedTaskDetails)}>{popupSelectedTaskDetails.taskName}</strong></p>
        </div>
        <div className='popup_inner_boxes'>
          <button type="submit" id="popupform_submit_btn" className='popup_btn' onClick={(e) => handleDeleteTaskClick(e, true)}>Yes</button>
          <button type="submit" id="popupform_submit_btn" className='popup_btn' onClick={(e) => handleDeleteTaskClick(e, false)}>No</button>
        </div>
      </form>
    </div>
  )
};

export default ShowPopupDeleteTask;