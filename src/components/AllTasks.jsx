import myContext from '../Context/Context'
import { useContext } from 'react'
import '../App.css'

const AllTasks = () => {
  const { tasks, setTasks } = useContext(myContext)

  const cambio = (e) => {
    e.target.innerHTML = 'no'
  }

  return (
    <div className="alltasks">
      <div className="container">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">All Tasks</h2>

        {/* Botones de filtro */}
        <div className="main-bar">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Finish</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Continues</button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">All</button>
        </div>

        {/* Select */}
        <div className="mb-4">
          <select className="select_items">
            <option value="Opciones">Opciones</option>
            <option value="Importante">Importante</option>
            <option value="Necesaria">Necesaria</option>
            <option value="Normal">Normal</option>
            <option value="Todo">Todo</option>
          </select>
        </div>

        {/* Input search */}
        <div className="mb-6">
          <input
            type="search"
            placeholder="Buscar tarea..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Lista de tareas */}
        <ul className="space-y-3">
          {tasks.map((tak, i) => (
            <li key={i} className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm">
              <div>
                <h4 className="font-semibold text-gray-700">{tak.text} {tak.category}</h4>
                <div
                  onClick={cambio}
                  className="text-sm text-blue-600 cursor-pointer hover:underline"
                >
                  Si
                </div>
              </div>
              <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AllTasks
