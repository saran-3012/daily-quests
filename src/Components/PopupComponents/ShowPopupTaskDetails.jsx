import React from 'react';
import {useAllContext} from '../../App';
import '../../Styles/ShowPopupBox.css';

const ShowPopupTaskDetails = () => {
  const StatesAndFunctions = useAllContext();
  const popupSelectedTaskDetails = StatesAndFunctions.currentSelectedTaskDetails;
  
  return (
    <div className='popup_container_wrapper'>
        <h2 className='popup_container_header'>Task Details</h2>
        <div className='popup_container_inner_wrapper'>
        <div className='popup_inner_boxes'>
            <span>Task Name</span>
            <p>{popupSelectedTaskDetails.taskName}</p>
        </div>
        <div className='popup_inner_boxes'>
            <span>Start Date</span>
            <p>{popupSelectedTaskDetails.taskStartDate}</p>
        </div>
        <div className='popup_inner_boxes'>
            <span>Start Time</span>
            <p>{popupSelectedTaskDetails.taskStartTime}</p>
        </div>
        <div className='popup_inner_boxes'>
            <span>End Date</span>
            <p>{popupSelectedTaskDetails.taskEndDate}</p>
        </div>
        <div className='popup_inner_boxes'>
            <span>End Time</span>
            <p>{popupSelectedTaskDetails.taskEndTime}</p>
        </div>
        <div className='popup_checkbox'>
            <label htmlFor="taskfavourite_input">Mark as favorite</label>
            <input type="checkbox" name="favorite_task" id="taskfavourite_input" checked={popupSelectedTaskDetails.taskPriority} />
        </div>
        <button id="popupform_submit_btn" className='popup_btn' onClick={() => StatesAndFunctions.changePopupMessageBox('update-task', popupSelectedTaskDetails)}>Edit</button>
        </div>
    </div>
  )
};

export default ShowPopupTaskDetails;