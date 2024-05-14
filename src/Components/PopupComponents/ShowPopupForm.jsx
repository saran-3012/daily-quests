import React, {useState} from 'react';
import {useAllContext} from '../../App';
import '../../Styles/ShowPopupBox.css';


const ShowPopupForm = () => {
  const StatesAndFunctions = useAllContext();
  const popupSelectedTaskDetails = StatesAndFunctions.currentSelectedTaskDetails;
  const [formTaskName, setFormTaskName] = useState(popupSelectedTaskDetails ? popupSelectedTaskDetails.taskName : '');
  const [formTaskEndDate, setFormTaskEndDate] = useState(popupSelectedTaskDetails ? popupSelectedTaskDetails.taskEndDate : '');
  const [formTaskEndTime, setFormTaskEndTime] = useState(popupSelectedTaskDetails ? popupSelectedTaskDetails.taskEndTime : '');
  const [formTaskPriority, setFormTaskPriority] = useState(popupSelectedTaskDetails ? popupSelectedTaskDetails.taskPriority : false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formTaskName){
      return;
    }
    const currentFormTaskDetails = {
      taskName:formTaskName,
      taskEndDate:formTaskEndDate,
      taskEndTime:formTaskEndTime,
      taskPriority: formTaskPriority ? "true" : "false"
    };

    if (popupSelectedTaskDetails.taskName) {
      currentFormTaskDetails.taskStartDate = popupSelectedTaskDetails.taskStartDate;
      currentFormTaskDetails.taskStartTime = popupSelectedTaskDetails.taskStartTime;
      currentFormTaskDetails.taskCompletedStatus = popupSelectedTaskDetails.taskCompletedStatus;
      StatesAndFunctions.updateTask(popupSelectedTaskDetails, currentFormTaskDetails);
    } 
    else {
      const currentDate = StatesAndFunctions.changeDateFormat(new Date().toJSON().slice(0, 10));
      const currentTime = StatesAndFunctions.correctTimeFormat(new Date().toJSON().slice(11,19));
      currentFormTaskDetails.taskStartDate = currentDate;
      currentFormTaskDetails.taskStartTime = currentTime;
      currentFormTaskDetails.taskCompletedStatus = "false";
      StatesAndFunctions.addTask(currentFormTaskDetails);
    }
    setFormTaskName('');
    setFormTaskEndDate('');
    setFormTaskEndTime('');
    setFormTaskPriority(false);
    StatesAndFunctions.changePopupMessageBox('', {});
  };

  return (
    <div className='popup_container_wrapper'>
      <h2 className='popup_container_header'>{popupSelectedTaskDetails.taskName?"Update Task":"Add Task"}</h2>
      <form className='popup_container_inner_wrapper'>
      <div className='popup_inner_boxes'>
          <label htmlFor="taskname_input">Task Name</label>
          <input type="text" name="task_name" id="taskname_input" placeholder='Task name' defaultValue={formTaskName} onChange={(e) => setFormTaskName(e.target.value)}/>
      </div>
      <div className='popup_inner_boxes'>
          <label htmlFor="taskenddate_input">End Date</label>
          <input type="date" name="task_end_date" id="taskenddate_input" defaultValue={StatesAndFunctions.revertDateFormat(formTaskEndDate)} onChange={(e) => setFormTaskEndDate(e.target.value)}/>
      </div>
      <div className='popup_inner_boxes'>
          <label htmlFor="taskendtime_input">End Time</label>
          <input type="time" name="task_end_time" id="taskendtime_input" defaultValue={StatesAndFunctions.correctTimeFormat(formTaskEndTime)} onChange={(e) => setFormTaskEndTime(e.target.value)}/>
      </div>
      <div className='popup_checkbox'>
          <label htmlFor="taskfavourite_input">Mark as favorite</label>
          <input type="checkbox" name="favorite_task" id="taskfavourite_input" defaultChecked={formTaskPriority} onChange={(e) => setFormTaskPriority(e.target.value)}/>
      </div>
      <button type="submit" id="popupform_submit_btn" className='popup_btn' onClick={handleSubmit}>{popupSelectedTaskDetails.taskName?"Update":"Save"}</button>
      </form>
    </div>
  )
};

export default ShowPopupForm;