import React from 'react';
import '../../Styles/ShowTasks.css';
import TaskNavbar from './TaskNavbar';
import AllTasks from './AllTasks';

const ShowTasks = () => {
  return (
    <div className='tasks_container'> 
      <TaskNavbar />
      <AllTasks />
    </div>
  )
};

export default ShowTasks;