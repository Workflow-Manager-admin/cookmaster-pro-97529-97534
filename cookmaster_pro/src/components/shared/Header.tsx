import React from 'react';
import Link from 'next/link';

// PUBLIC_INTERFACE
export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white shadow-sm border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
          <Link href="/">
            CookMaster Pro
          </Link>
        </h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search recipes..." 
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:border-gray-600"
          />
          <button className="absolute right-3 top-2.5">
            🔍
          </button>
        </div>
        
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
          🔔
        </button>
        
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
          👤
        </button>
      </div>
    </header>
  );
}
