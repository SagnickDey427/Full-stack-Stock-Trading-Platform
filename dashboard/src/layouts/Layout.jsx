import React from 'react';
import TopBar from '../components/TopBar.jsx';
import WatchList from '../components/WatchList.jsx';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    // Outer container ensures the layout takes at least the full viewport height
    <div className="flex flex-col min-h-screen">
      
      {/* 1. TopBar at the top */}
      <header>
        <TopBar />
      </header>

      {/* Main Content Area */}
      {/* grid-cols-1 stacks them on mobile, md:grid-cols-12 creates the 12-col grid on larger screens */}
      <main className="flex-grow grid grid-cols-1 md:grid-cols-12">
        
        {/* 2. WatchList on the left, taking 4/12 grid columns on desktop */}
        <aside className="md:col-span-4 border-r border-gray-200">
          <WatchList />
        </aside>

        {/* 3. Outlet takes the remaining 8/12 grid columns on desktop */}
        <section className="md:col-span-8 p-4">
          <Outlet />
        </section>

      </main>
    </div>
  );
}