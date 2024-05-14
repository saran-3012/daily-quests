import React from 'react';
import {useAllContext} from '../../App';
import '../../Styles/Sidebar.css';
import AppLogo from '../../Images/app-logo.png';

const Sidebar = () => {
  const StatesAndFunctions = useAllContext();

  const openAddTaskPopup = () => {
    StatesAndFunctions.changePopupMessageBox('add-task', {});
    StatesAndFunctions.toggleSidebar();
  };

  return (
    <aside className={'sidebar '+(StatesAndFunctions.isSidebarOpen?'show_sidebar':'')}>
      <div className='sidebar_outer_container'>
        <button className='exit_svg_button' onClick={StatesAndFunctions.toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>
        </button>
        <div className="sidebar_inner_container">
          <a className='app_logo' href='#' onClick={StatesAndFunctions.toggleSidebar}>
            <img src={AppLogo} alt="App Logo"/>
          </a>
          <nav>
            <ul className='sidebar_menu'>
              <li className={'navigation_links ' + (StatesAndFunctions.activeNavlink==='All'?'active_link':'')} onClick={() => StatesAndFunctions.handleTaskConfigurationSettings('', 'Filter')}>
                <a >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="sidebar_navlink_svg">
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                  </svg>
                  <span>Dashboard</span>
                </a>
              </li>
              <li className={'navigation_links ' + (StatesAndFunctions.activeNavlink==='Completed'?'active_link':'')} onClick={() => StatesAndFunctions.handleTaskConfigurationSettings('Completed', 'Filter')}>
                <a >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="sidebar_navlink_svg">
                    <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                  </svg>
                  <span>Completed</span>
                </a>
              </li>
              <li className={'navigation_links ' + (StatesAndFunctions.activeNavlink==='In progress'?'active_link':'')} onClick={() => StatesAndFunctions.handleTaskConfigurationSettings('In progress', 'Filter')}>
                <a >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="sidebar_navlink_svg">
                    <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
                  </svg>
                  <span>Upcoming</span>
                </a>
              </li>
              <li>
                <button className='add_task_button btn' onClick={openAddTaskPopup}>
                  <svg className='btn_svg' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  <p>Add Task</p>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="sidebar_inner_container">
          <nav>
            <ul className='sidebar_menu hyperlinks_container'>
              <li>
                <a className='hyperlink_icons' href="https://www.linkedin.com/in/saran3012/" target='_blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path 
                      fill-rule="evenodd" 
                      d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" 
                      clip-rule="evenodd"
                    />
                    <path 
                      d="M7.2 8.809H4V19.5h3.2V8.809Z"
                    />
                  </svg>

                </a>
              </li>
              <li>
                <a className='hyperlink_icons' href="https://github.com/saran-3012" target='_blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path 
                      fill-rule="evenodd" 
                      d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" 
                      clip-rule="evenodd"/>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  )
};

export default Sidebar;