import React from 'react';
import '../../Styles/Utility.css';
import '../../Styles/TaskButton.css';

const TaskButton = (props) => {

  return (
    <div className='task_dropdown'>
      <button className='task_dropdown_button btn' onClick={() => props.setCurrentActiveButton(props.buttonName)}>
        <svg className='btn_svg' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d={props.pathD} />
        </svg>
        <p className='task_button_text'>{props.buttonName}</p>
      </button>
      {
        (props.activeTaskButton===props.buttonName) &&
        (<div className="dropdown_content">
          {
            props.buttonContents.map((opt) => (
              <div key={opt} className="task_dropdown_option" onClick={() => props.handleDropdownOptionClick(opt, props.buttonName)}>
                {opt}
              </div>
            ))
          }
        </div>)
      }
    </div>
  )
};

export default TaskButton;