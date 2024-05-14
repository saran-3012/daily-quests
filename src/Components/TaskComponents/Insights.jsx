import React from 'react';
import {useAllContext} from '../../App';
import '../../Styles/Insights.css';
import ProgressCircle from './ProgressCircle';

const Insights = () => {
  const StatesAndFunctions = useAllContext();
  const totalTasks = StatesAndFunctions.getTotalTasks();
  const totalCompletedTasks = StatesAndFunctions.getTotalCompletedTasks();
  const totalUpcomingTasks = StatesAndFunctions.getTotalUpcomingTasks();

  return (
    <div className='insights'>
      <div className="insights_container">
        <h2>Hello <strong onClick={() => StatesAndFunctions.changePopupMessageBox('change-username', {})}>{localStorage.getItem('userName')||'There'}</strong></h2>
      </div>
      <div className='insights_container'>
        <h3>Insights</h3>
        <ProgressCircle numerator={totalCompletedTasks} denominator={totalTasks} progressMsg1={"Tasks"} progressMsg2={"Completed"}/>
        <ProgressCircle numerator={totalUpcomingTasks} denominator={totalTasks} progressMsg1={"More"} progressMsg2={"to go"}/>
      </div>
    </div>
  )
};

export default Insights;