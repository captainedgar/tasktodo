// Components/AddTasks.js
import '../App.css'
import { useContext, useState } from 'react';
import myContext from '../Context/Context';

const AddTasks = () => {
  const { option, setOption, tasks, setTasks, taskInput, setTaskinput } = useContext(myContext);
 

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  const handleInputChange = (e) => {
    setTaskinput(e.target.value);
  };

  const handleAddTask = () => {
    if (!taskInput || !option) {
      alert("Por favor, escriba una tarea y selecciona una categoría");
      return;
    }

    const newTask = { text: taskInput, category: option };
    setTasks([...tasks, newTask]);
    setTaskinput('');
  };

  return (
    <>
      <div className="addTask_items">
        <div className='box_add'>
        <h2>Add Task</h2>
        <div className='selectDiv'>
        <select value={option} onChange={handleChange} className='addTask_select'>
          <option value="">Opciones</option>
          <option value="Importante">Importante</option>
          <option value="Necesarias">Necesarias</option>
          <option value="Normal">Normal</option>
        </select>
        </div>
        {/*<div>Has seleccionado: {option}</div>*/}

        <div>
          <input type="text" value={taskInput} onChange={handleInputChange} />
          <button onClick={handleAddTask}>Add</button>
        </div>
      </div>
      </div>

     {/*} <div>
        <h3>Lista de tareas:</h3>
        <ul>
          {tasks.map((t, i) => (
            <li key={i}>
              [{t.category}] {t.text}
            </li>
          ))}
        </ul>
      </div>*/}
    </>
  );
};

export default AddTasks;
