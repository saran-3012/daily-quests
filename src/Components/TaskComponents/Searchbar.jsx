import React from 'react';
import {useAllContext} from '../../App';
import '../../Styles/Utility.css';
import '../../Styles/Searchbar.css';

const Searchbar = () => {

  const StatesAndFunctions = useAllContext();

  const handleSearchInputChange = (e) => {
    StatesAndFunctions.handleTaskConfigurationSettings(e.target.value, 'Search');
  };

  return (
    <div className='searchbar_container'>
      <div className='search_icon btn_svg'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>
      <input type="search" name="Search Tasks" class="search_tasks_input" placeholder='Search the task' onInput={handleSearchInputChange}/>
    </div>
  )
};

export default Searchbar;