import React, { useState, useEffect, createContext, useContext } from 'react';
import './App.css';
import Navbar from './Components/NavbarComponents/Navbar';
import Sidebar from './Components/SidebarComponents/Sidebar';
import TaskInterface from './Components/TaskComponents/TaskInterface';
import ShowPopupInterface from './Components/PopupComponents/ShowPopupInterface';

const UserContext = createContext();

const App = () => {

  // Theme Switcher
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light-theme');

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    (theme==='dark-theme')? setTheme('light-theme'):setTheme('dark-theme');
  };

  // Toggle Sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Date and Time

  const changeDateFormat = (d) => {
    if(d){
      d = d.split('-');
      return d[2].padStart('0',2)+'-'+d[1].padStart('0',2)+'-'+d[0].padStart('0',4);
    }
    else{
      return '';
    }
  };

  const revertDateFormat = (d) => {
    if(d){
      d = d.split('-');
      return d[2].padStart('0',4)+'-'+d[1].padStart('0',2)+'-'+d[0].padStart('0',2);
    }
    else{
      return '';
    }
  };

  const correctTimeFormat = (t) => {
    if(t){
      t = t.split(':');
      return t[0].padStart('0',2)+':'+t[1].padStart('0',2)+':'+(t[2]?t[2].padStart('0',2):'00');
    }
    else{
      return '';
    }
  };

  const compareDateTime = (d1, d2, t1, t2) => {
    return ((d1+t1) < (d2+t2));
  };

  // Popup Messages

  const [currentPopupMessage, setCurrentPopupMessage] = useState('');
  const [currentSelectedTaskDetails, setCurrentSelectedTaskDetails] = useState({});
  const changePopupMessageBox = (msgBox, currentTaskDetails) => {
    (currentPopupMessage===msgBox)?setCurrentPopupMessage(''):setCurrentPopupMessage(msgBox);
    setCurrentSelectedTaskDetails(currentTaskDetails);
  };

  // Task Management

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || {});
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const [taskConfiguration, setTaskConfiguration] = useState({
    taskSearchValue:'',
    taskFilterValue:'',
    taskSortValue:'',
    taskOrderValue:''
  });

  const changeTaskConfiguration = (newTaskConfiguration) => {
    setTaskConfiguration(newTaskConfiguration);
  };

  const getKey = (task) => {
    const key = task.taskStartDate + "&" + task.taskStartTime;
    return key;
  }
  
  const filterTasks = (filterType, allTasks) => {
    const currentDate = new Date().toJSON().slice(0, 10);
    const currentTime = correctTimeFormat(new Date().toJSON().slice(11,19));
    if(filterType==="In progress"){
      return allTasks.filter((t) => t.taskCompletedStatus==="false" && (!t.taskEndDate || !t.taskEndTime || compareDateTime(currentDate, revertDateFormat(t.taskEndDate), currentTime, t.taskEndTime)));
    }
    else if(filterType==="Completed"){
      return allTasks.filter((t) => t.taskCompletedStatus==="true");
    }
    else if(filterType==="Overdue"){
      return allTasks.filter((t) => t.taskCompletedStatus==="false" && t.taskEndDate && t.taskEndTime && compareDateTime(revertDateFormat(t.taskEndDate), currentDate, t.taskEndTime, currentTime));
    }
    else{
      return allTasks;
    }
  };
  
  const sortTasks = (sortType, orderType, taskArray) => {
    const taskOrder = (orderType==="Descending"?-1:1);
    if(sortType==="Name"){
      taskArray.sort((t1, t2) => t1.taskName.localeCompare(t2.taskName) * taskOrder || getKey(t1).localeCompare(getKey(t2)));
    }
    else if(sortType==="Deadline"){
      taskArray.sort((t1, t2) => (t1.taskEndDate+'&'+t1.taskEndTime).localeCompare(t2.taskEndDate+'&'+t2.taskEndTime) * taskOrder || getKey(t1).localeCompare(getKey(t2)));
    }
    else if(sortType==="Priority"){
      taskArray.sort((t1, t2) => t1.taskPriority.localeCompare(t2.taskPriority) * taskOrder || getKey(t1).localeCompare(getKey(t2)));
    }
    else{
      taskArray.sort((t1, t2) => getKey(t1).localeCompare(getKey(t2)) * taskOrder);
    }
  };
  
  const organizeTasks = (filterType, sortType, orderType) => {
    const allTasks = Object.values(tasks) ;
    const organizedResults = filterTasks(filterType, allTasks);
    sortTasks(sortType, orderType, organizedResults);
    return organizedResults;
  };
  
  const searchTasks = (searchTaskName, filterType, sortType, orderType) => {
    const allTasks = organizeTasks(filterType, sortType, orderType);
    if(!searchTaskName){
      return allTasks;
    }
    const searchResult = allTasks.filter((t) => t.taskName.toLowerCase().startsWith(searchTaskName.toLowerCase()));
    return searchResult;
  };

  const addTask = (task) => {
    const key = getKey(task);
    const updatedTasks = {...tasks, [key] : task};
    setTasks(updatedTasks);
  };

  const updateTask = (task, newTask) => {
    const key = getKey(task);
    const updatedTasks = {...tasks, [key] : newTask};
    setTasks(updatedTasks);
  };

  const deleteTask = (task) => {
    const key = getKey(task);
    const updatedTasks = {...tasks};
    delete updatedTasks[key];
    setTasks(updatedTasks);
  };

  const deleteSelectedTasks = (deleteType) => {
    if(deleteType==='All'){
      clearAllTasks();
      return;
    }
    const selectedTasksKeys = filterTasks(deleteType, Object.values(tasks)).map((t) => getKey(t));
    const updatedTasks = {...tasks};
    selectedTasksKeys.forEach((k) => {
      delete updatedTasks[k];
    });
    setTasks(updatedTasks);
  };

  const clearAllTasks = () => {
    setTasks({});
  };

  const getTotalTasks = () => {
    return Object.values(tasks).length;
  };

  const getTotalCompletedTasks = () => {
    return  Object.values(tasks).filter((t) => t.taskCompletedStatus==="true").length;
  };

  const getTotalUpcomingTasks = () => {
    return  Object.values(tasks).filter((t) => t.taskCompletedStatus==="false").length;
  };

  const [displayedTasks, setDisplayedTasks] = useState([]); 

  useEffect(() => {
    setDisplayedTasks(searchTasks(taskConfiguration.taskSearchValue, taskConfiguration.taskFilterValue, taskConfiguration.taskSortValue, taskConfiguration.taskOrderValue));
  }, [tasks, taskConfiguration]);

  // Configuration Handlers

  const [activeNavlink, setActiveNavlink] = useState('All');

  const handleTaskConfigurationSettings = (activeElementName, configType) => {
    (configType==='Filter') && setActiveNavlink(activeElementName);
    changeTaskConfiguration({...taskConfiguration, ['task'+configType+'Value']:activeElementName});
    isSidebarOpen && toggleSidebar();
  };

  return (
    <div className={'App ' + theme}>
      <UserContext.Provider
        value={{
          theme,
          toggleTheme,
          isSidebarOpen,
          toggleSidebar,
          currentPopupMessage,
          currentSelectedTaskDetails,
          changePopupMessageBox,
          changeDateFormat,
          revertDateFormat,
          correctTimeFormat,
          tasks,
          addTask,
          updateTask,
          deleteTask,
          clearAllTasks,
          filterTasks,
          sortTasks,
          organizeTasks,
          searchTasks,
          deleteSelectedTasks,
          taskConfiguration,
          changeTaskConfiguration,
          displayedTasks,
          getTotalTasks,
          getTotalCompletedTasks,
          getTotalUpcomingTasks,
          activeNavlink,
          handleTaskConfigurationSettings
        }}
      >
        <Navbar />
        <Sidebar />
        <TaskInterface />
        {
          currentPopupMessage && 
          <ShowPopupInterface />
        }
      </UserContext.Provider>
    </div>
  );
};


export const useAllContext = () => useContext(UserContext);
export default App;
