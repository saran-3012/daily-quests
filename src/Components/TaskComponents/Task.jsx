import React from 'react';
import {useAllContext} from '../../App';
import '../../Styles/Task.css';

const Task = (props) => {
  const StatesAndFunctions = useAllContext();

  const thisTaskDetails = props.taskDetails;

  const toggleTaskCompletedStatus = (e) => {
    e.stopPropagation();
    const updatedTaskDetails = { ...thisTaskDetails, taskCompletedStatus: (thisTaskDetails.taskCompletedStatus==="true")?"false":"true" };
    StatesAndFunctions.updateTask(thisTaskDetails, updatedTaskDetails);
  };

  const toggleFavoriteTask = (e) => {
    e.stopPropagation();
    const updatedTaskDetails = { ...thisTaskDetails, taskPriority: (thisTaskDetails.taskPriority==="true")?"false":"true"};
    StatesAndFunctions.updateTask(thisTaskDetails, updatedTaskDetails);
  };

  return (
    <div className='tasks' onClick={(e) => props.handleTaskOperations(e, 'show-task', thisTaskDetails)}>
      <div className='task_details_container'>
        <button className={'alltask_button ' + (thisTaskDetails.taskCompletedStatus==="true"?'task_complete':'')} onClick={toggleTaskCompletedStatus}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
          </svg>
        </button>
        <span className={'alltask_name ' + (thisTaskDetails.taskCompletedStatus==="true"?'task_complete':'')}>{thisTaskDetails.taskName}</span>
      </div>
      <div className='task_details_container'>
        <button className={'alltask_button '+ (thisTaskDetails.taskPriority==="true"?'favorite_task_star':'')} onClick={toggleFavoriteTask}> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
          </svg>
        </button>
        <button className='alltask_button' onClick={(e) => props.handleTaskOperations(e, 'update-task', thisTaskDetails)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
          </svg>
        </button>
        <button className='alltask_button' onClick={(e) => props.handleTaskOperations(e, 'delete-task', thisTaskDetails)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.25" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
};

export default Task;