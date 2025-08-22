

import './App.css'
import AddTasks from './components/AddTasks'
import Provider from './Context/Provider'
import AllTasks from './components/AllTasks'
import Prueba from './components/Prueba'

function App() {
 

  return (
    <>
    <Provider>
    <div>
        <AllTasks/>
    </div>
    <div>
        <AddTasks/>
    </div>
    </Provider>
   

    
    </>
    
  )
}

export default App
