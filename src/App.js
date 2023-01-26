import './App.css';
import { Route, Routes } from 'react-router-dom'
import Heading from './components/Heading'
import Tasklist from './components/Tasklist'
import Taskform from './components/Taskform'
import {ContextProvider} from './context/GlobalContext'

function App() {
  return (
    <div>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <ContextProvider>
            <Heading />
            <Routes>
              <Route path='/' element={<Tasklist />} exact />
              <Route path='/add' element={<Taskform />} />
              <Route path='/edit/:id' element={<Taskform />} />
            </Routes>
          </ContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
