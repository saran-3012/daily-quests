import React from 'react';
import {useAllContext} from '../../App';
import '../../Styles/AddNewTaskButton.css';

const AddNewTaskButton = () => {
  const StatesAndFunctions = useAllContext();
  return (
    <button className='addnewtask_btn' onClick={() => StatesAndFunctions.changePopupMessageBox('add-task', {})}>
      <svg className='addnewtask_svg' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </button>

  )
}

export default AddNewTaskButton;