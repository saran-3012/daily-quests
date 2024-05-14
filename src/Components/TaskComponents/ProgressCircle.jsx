import React from 'react';
import '../../Styles/ProgressCircle.css';

const ProgressCircle = (props) => {
  return (
    <div class="single-chart">
      <svg viewBox="0 0 36 36" class="circular-chart">
        <path class="bg-circle" 
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path class="progress-circle"
              stroke-dasharray={((props.numerator*100)/props.denominator)+", 100"}
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              stroke='#ff9f00'
        />
        <text x="18" y="13.35" class="progress-text1">{props.numerator}</text>
        <text x="18" y="18.35" class="progress-text2">{props.progressMsg1}</text>
        <text x="18" y="23.35" class="progress-text2">{props.progressMsg2}</text>
      </svg>
    </div>
  )
};

export default ProgressCircle;