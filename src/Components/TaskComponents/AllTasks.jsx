import React from 'react';
import {useAllContext} from '../../App';
import '../../Styles/AllTasks.css';
import Task from './Task';

const AllTasks = () => {
  const StatesAndFunctions = useAllContext();
  const allTaskDetails = StatesAndFunctions.displayedTasks;

  const handleTaskOperations = (e, popupWindow, currentTaskDetails) => {
    e.stopPropagation();
    StatesAndFunctions.changePopupMessageBox(popupWindow, currentTaskDetails);
  };

  return (
    <div className='alltasks_container'>
      {allTaskDetails.length?
        allTaskDetails.map((taskDtls) => (
          <Task taskDetails={taskDtls} handleTaskOperations={handleTaskOperations}/>
        )):
        <p className='notask_displayed_text'>
          {
            (StatesAndFunctions.activeNavlink==="All")?
            "No tasks assigned currently":
            (StatesAndFunctions.activeNavlink==="In progress")?
            "No tasks in progress":
            (StatesAndFunctions.activeNavlink==="Completed")?
            "No completed tasks yet":
            (StatesAndFunctions.activeNavlink==="Overdue")?
            "You're all caught up! No tasks are overdue":
            ""
          }
        </p>
      }
    </div>
  )
};

export default AllTasks;