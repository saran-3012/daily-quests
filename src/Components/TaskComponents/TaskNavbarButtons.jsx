import React, { useState } from 'react';
import {useAllContext} from '../../App';
import TaskButton from './TaskButton';
import '../../Styles/TaskNavbarButtons.css';

const TaskNavbarButtons = () => {

  const StatesAndFunctions = useAllContext();

  const taskButtonDetails = [
    {
      buttonName : 'Sort',
      pathD : "M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12",
      buttonContents : ["Name","Added","Deadline","Priority"]
    },
    {
      buttonName : 'Order',
      pathD : "M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5", 
      buttonContents : ["Ascending","Descending"]
    },
    {
      buttonName : 'Filter',
      pathD : "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75",
      buttonContents : ["All","In progress","Completed","Overdue"]
    },
    {
      buttonName : 'Delete',
      pathD : "M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
      buttonContents : ["All","In progress","Completed","Overdue"]
    },
  ];
  
  const [activeTaskButton, setActiveTaskButton]=useState('');

  const setCurrentActiveButton = (btnName) => {
    setActiveTaskButton((activeTaskButton===btnName?'':btnName))
  };

  const handleDropdownOptionClick = (optName, btnName) => {
    if(btnName==="Delete"){
      StatesAndFunctions.deleteSelectedTasks(optName);
    }
    else{
      StatesAndFunctions.handleTaskConfigurationSettings(optName, btnName);
    }
    setActiveTaskButton('');
  };

  return (
    <div className='task_navbar_buttons'>
      {taskButtonDetails.map((taskBtn) => (
        <TaskButton
          buttonName={taskBtn.buttonName} 
          pathD={taskBtn.pathD} 
          buttonContents={taskBtn.buttonContents}
          activeTaskButton={activeTaskButton} 
          setCurrentActiveButton={setCurrentActiveButton}
          handleDropdownOptionClick={handleDropdownOptionClick}
        />
      ))}
    </div>
  )
};

export default TaskNavbarButtons;