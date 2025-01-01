import Header from '@/components/header';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
    <div className="grid-background"></div>
    <main className="min-h-screen container px-4 py-6"> 
    <Header/>
    <Outlet/>
    </main>
   </div>
  )
}

export default AppLayout;
