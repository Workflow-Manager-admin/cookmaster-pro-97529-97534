import React from 'react';
import Link from 'next/link';
import { NavigationItem } from '@/types';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

// PUBLIC_INTERFACE
export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  // Navigation items for sidebar
  const navItems: NavigationItem[] = [
    { id: 'recipes', name: 'Recipes', path: '/recipes', icon: '📖' },
    { id: 'ingredients', name: 'Ingredients', path: '/ingredients', icon: '🥕' },
    { id: 'meal-planning', name: 'Meal Planning', path: '/meal-planning', icon: '📅' },
    { id: 'nutrition', name: 'Nutrition', path: '/nutrition', icon: '📊' },
    { id: 'shopping', name: 'Shopping List', path: '/shopping', icon: '🛒' },
    { id: 'favorites', name: 'Favorites', path: '/favorites', icon: '⭐' },
  ];

  return (
    <aside className="w-64 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      <nav className="px-4 py-6 flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                <span className="mr-3 text-xl">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full flex items-center px-4 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg dark:text-gray-300 dark:hover:bg-gray-700">
          <span className="mr-3">⚙️</span>
          <span className="font-medium">Settings</span>
        </button>
        <button className="w-full flex items-center px-4 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg dark:text-gray-300 dark:hover:bg-gray-700">
          <span className="mr-3">❓</span>
          <span className="font-medium">Help</span>
        </button>
      </div>
    </aside>
  );
}
