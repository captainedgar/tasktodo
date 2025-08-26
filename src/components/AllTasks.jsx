import myContext from '../Context/Context'
import { useContext, useState } from 'react'
import '../App.css'

const AllTasks = () => {
  const { tasks, setTasks } = useContext(myContext)
  const [search, setSearch]= useState('');
  const [category, setCategory]= useState('Todo');

const toggleTask=()=>{

}

const deleteTask=()=>{
  
}


  return (
    <div className="alltasks">
      <div className="container" >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">All Tasks</h2>

        {/* Botones de filtro */}
        <div className="main-bar">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Finish</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Continues</button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">All</button>
        </div>

        {/* Select */}
        <div className="mb-4">
          <select className="select_items" onChange={(e)=>setCategory(e.target.value)} value={category}>
            <option value="Opciones">Opciones</option>
            <option value="Importante">Importante</option>
            <option value="Necesaria">Necesaria</option>
            <option value="Normal">Normal</option>
            <option value="Todo">Todo</option>
          </select>
        </div>

        {/* Input search */}
      


        <div className="searchTask" >
          <input
            type="search"
            placeholder="Buscar tarea..."
            className=""
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
        </div>
        <div>
            <table className="table-auto border-collapse border border-gray-400 w-full">
       
        </table>
        </div>
       <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Nivel de Prioridad</th>
            <th>Hecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        { tasks.filter((tak)=> 
        tak.text.toLowerCase().includes(search.toLowerCase() ) && 
        (category==='Todo' || tak.category === setCategory))
        
      
      .map((tak, i)=>(
        <tr key={i}>
             
                <td>{tak.text}</td>
                <td>{tak.category}</td>
                <td >
                 <input
                  type="checkbox"
                  checked={tak.done}
                  onChange={() => toggleTask(i)}
                  className='check'
                />
                </td>
              <td>
              <button className="buttonTask" onClick={() => deleteTask(i)}>
                X
              </button>
              </td>
             
            </tr>
      ))
      
      }
     
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default AllTasks
