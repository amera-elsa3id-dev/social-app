
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routes/Routes'
import UserContextProvider from './context/UserContext';

function App() {


  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  )
}

export default App
