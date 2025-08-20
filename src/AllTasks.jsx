import React from 'react'
import myContext from './Context/Context'
import { useContext } from 'react'

const AllTasks = () => {
    const {tasks, setTasks } = useContext(myContext)
  return (
    <>
    <div className='allTasks'>
      <div>
        <h2>All Tasks</h2>
        Lista de tareas:
        <ul>
            {tasks.map((tak, i )=>(

                <div key={i}>
                   <li>{tak}</li> 

                </div>

            ) )}
        </ul>
      </div>
    </div>
    </>
  )
}

export default AllTasks
