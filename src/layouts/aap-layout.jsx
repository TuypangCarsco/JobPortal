import Header from '@/components/header';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
    <div className="grid-background"></div>
    <main className="min-h-screen container px-20 py-4"> 
    <Header/>
    <Outlet/>
    </main>
    <div className="p-10 text-centre bg-gray-800 mt-10"
    >Made with 💗 by Tuypang</div>
   </div>
  )
}

export default AppLayout;
