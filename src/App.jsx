
import AllTasks from './AllTasks'
import './App.css'
import AddTasks from './components/AddTasks'
import Provider from './Context/Provider'

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
