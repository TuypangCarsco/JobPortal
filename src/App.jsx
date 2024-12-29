import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import AppLayout from './layouts/aap-layout';
import LandingPage from './pages/landing';
import Onboarding from './pages/onboarding';
import JobListing from './pages/job-listing';
import JobPage from './pages/job';
import PostJob from './pages/post-job';
import SavedJob from './pages/saved-job';
import MyJobs from './pages/my-jobs';

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage />
      },
      
      {
        path:'/onboarding',
        element:<Onboarding />
      },
      {
        path:'/job',
        element:<JobListing />
      },
      {
        path:'/job/:id',
        element:<JobPage />
      },
      {
        path:'/post-job',
        element:<PostJob />
      },
      {
        path:'/saved-job',
        element:<SavedJob />
      },
      {
        path:'/my-jobs',
        element:<MyJobs />
      },
    ]
  }
])

function App() {
  return (
  <RouterProvider router = {router}/>
  );
}
export default App

