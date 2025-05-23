import React from 'react';

// PUBLIC_INTERFACE
export default function Footer() {
  return (
    <footer className="py-4 px-6 bg-white border-t border-gray-200 text-sm text-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <p>© {new Date().getFullYear()} CookMaster Pro. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400">
            Terms
          </a>
          <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400">
            Privacy
          </a>
          <a href="#" className="hover:text-emerald-600 dark:hover:text-emerald-400">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
