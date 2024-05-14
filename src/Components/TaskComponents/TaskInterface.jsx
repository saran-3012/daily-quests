import React from 'react';
import {useAllContext} from '../../App';
import '../../Styles/TaskInterface.css';
import ShowTasks from './ShowTasks';
import Insights from './Insights';
import AddNewTaskButton from './AddNewTaskButton';

const TaskInterface = () => {
  const StatesAndFunctions = useAllContext();
  const displayedTaskCount = StatesAndFunctions.displayedTasks.length;
  return (
    <main className='tasks-container' style={displayedTaskCount<3?{justifyContent:'flex-end'}:{justifyContent:'initial'}}> 
      <ShowTasks />
      <Insights />
      <AddNewTaskButton />
    </main>
  )
}

export default TaskInterface;