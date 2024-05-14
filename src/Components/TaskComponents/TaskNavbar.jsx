import React from 'react';
import Searchbar from './Searchbar';
import TaskNavbarButtons from './TaskNavbarButtons';
import '../../Styles/TaskNavbar.css';

const TaskNavbar = () => {
  return (
    <div className='task_navbar'>
      <Searchbar />
      <TaskNavbarButtons />
    </div>
  )
};

export default TaskNavbar;