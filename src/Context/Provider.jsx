import React from 'react'
import myContext from './Context'
import { useState } from 'react';

const Provider = ({children}) => {
    const [option, setOption] = useState('');
    const [tasks, setTasks] = useState([]);
     const [taskInput, setTaskinput] = useState('');
    const value = {
        option, 
        setOption,
        tasks, 
        setTasks,
        taskInput, 
        setTaskinput
        
    }
  return (
    
      <myContext.Provider  value= {value}>
        {children}
      </myContext.Provider>
    
  )
}

export default Provider
