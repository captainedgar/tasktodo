import myContext from '../Context/Context'
import { useContext, useState } from 'react'
import '../App.css'

const AllTasks = () => {
  // 🔹 Traemos del contexto la lista de tareas y el método para actualizarla
  const { tasks, setTasks } = useContext(myContext)

  // 🔹 Estados locales para búsqueda, categoría y filtro
  const [search, setSearch] = useState('');      // almacena lo escrito en el input de búsqueda
  const [category, setCategory] = useState('Todo'); // guarda la categoría seleccionada en el select
  const [filter, setFilter] = useState('All');   // controla qué filtro aplicar (All, Finished, Continues)

  // 🔹 Marca/desmarca una tarea como terminada (done true/false)
  const toggleTask = (i) => {
    const newTaks = [...tasks];
    newTaks[i].done = !newTaks[i].done; // cambia el valor de "done"
    setTasks(newTaks);                  // actualiza el estado global de tasks
  }

  // 🔹 Elimina una tarea filtrando por índice
  const deleteTask = (i) => {
    const newTaks = tasks.filter((_, index) => index !== i);
    setTasks(newTaks);
  }

  // ⚠️ Esta función está incompleta, no se usa aún
  const finish = (i) => {
    const newfinish = tasks.filter(i.includes())
  }


  return (
    <div className="alltasks">
      <div className="container" >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">All Tasks</h2>

        {/* 🔹 Botones de filtro para mostrar Finished / Continues / All */}
        <div className="main-bar">
          <button className={`filter-btn ${filter === 'Finish' ? 'active' : '' }`} onClick={() => setFilter('Finish')} >Finish</button>
          <button className={`filter-btn ${filter === 'Continues' ? 'active' : '' }`} onClick={() => setFilter('Continues')} >Continues</button>
          <button className={`filter-btn ${filter ==='All' ? 'active' : '' }`} onClick={() => setFilter('All')} >All</button>
        </div>

        {/* 🔹 Select para filtrar por categoría */}
        <div className="mb-4">
          <select
            className="select_items"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="Opciones">Opciones</option>
            <option value="Importante">Importante</option>
            <option value="Necesarias">Necesaria</option>
            <option value="Normal">Normal</option>
            <option value="Todo">Todo</option>
          </select>
        </div>

        {/* 🔹 Input de búsqueda */}
        <div className="searchTask" >
          <input
            type="search"
            placeholder="Buscar tarea..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* 🔹 Tabla de tareas */}
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
            {tasks
              // 🔹 Primer filtro: búsqueda por texto y categoría
              .filter((tak) =>
                tak.text.toLowerCase().includes(search.toLowerCase()) &&
                (category === 'Todo' || tak.category === category)
              )
              // 🔹 Segundo filtro: según el estado (Finish, Continues o All)
              .filter((tak) => {
                if (filter === 'Finished') return tak.done;    // muestra solo terminadas
                if (filter === 'Continues') return !tak.done;  // muestra solo en progreso
                return true;                                   // si es "All", muestra todas
              })
              // 🔹 Render de cada tarea
              .map((tak, i) => (
                <tr key={i}>
                  {/* Si la tarea está terminada, se muestra tachada */}
                  <td style={{ textDecoration: tak.done ? "line-through" : "none" }}>
                    {tak.text}
                  </td>
                  <td>{tak.category}</td>
                  <td>
                    {/* Checkbox para marcar/desmarcar como hecha */}
                    <input
                      type="checkbox"
                      checked={tak.done}
                      onChange={() => toggleTask(i)}
                      className='check'
                    />
                  </td>
                  <td>
                    {/* Botón para eliminar la tarea */}
                    <button className="buttonTask" onClick={() => deleteTask(i)}>
                      X
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllTasks
