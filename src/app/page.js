'use client';
import { useEffect, useState } from 'react';
// import Dashboard from '@/components/dashboard/Dashboard';
import Navbar from '@/components/navbar/Navbar';
import Sidebar from '@/components/sidebar/Sidebar';
// import 'bootstrap';

// styles
import '@/styles/styles.css';
import '@/styles/dashboard.css';
import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('@/components/dashboard/Dashboard'), { ssr: false })


const Home = () => {

  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    require("bootstrap")
  }, [])

  const toggleSidebar = () => {
    if (window.innerWidth < 991) {
      setShowSidebar(!showSidebar);
    }
  };

  return (
    <div className="container-scroller">
      {/* navbar */}
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="container-fluid page-body-wrapper">
        {/* sidebar */}
        <Sidebar show={showSidebar} />
        <Dashboard />
      </div>
    </div >
  );
}

export default Home;
