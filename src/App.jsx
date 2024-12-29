import { createBrowserRouter } from 'react-router-dom';
import './App.css'
import { Button } from './components/ui/button';

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage />
      }
    ]
  }
])

function App() {
  return ();
}
export default App

