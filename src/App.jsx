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
import { ThemeProvider } from './components/theme-provider';
import ProtectedRoutes from './components/protected-route';
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
        element:(
       <ProtectedRoutes>
        <Onboarding />
       </ProtectedRoutes>
        ),
      },
      {
        path:'/jobs',
        element:(
          <ProtectedRoutes>
          <JobListing />
          </ProtectedRoutes>
        ),
      },
      {
        path:'/job/:id',
        element:(
          <ProtectedRoutes>
            <JobPage />
          </ProtectedRoutes>
        ),
      },
      {
        path:'/post-job',
        element:(
          <ProtectedRoutes>
           <PostJob />            
          </ProtectedRoutes>
        ),
      },
      {
        path:'/saved-jobs',
        element:(
          <ProtectedRoutes>
            <SavedJob />
          </ProtectedRoutes>
        ),
      },
      {
        path:'/my-jobs',
        element:(
          <ProtectedRoutes>
           <MyJobs />
          </ProtectedRoutes>
        ),
      },
    ]
  }
])

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router = {router}/>
    </ThemeProvider>
  );
}
export default App

