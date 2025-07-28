// src/components/SidebarMenu.tsx
import React from 'react';
import { Feature } from '../types';

interface SidebarMenuProps {
  items: Feature[];
  activeItemId: string;
  onItemClick: (id: string) => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ items, activeItemId, onItemClick }) => {
  if (!items) {
    return null;
  }

  return (
    <nav className="flex flex-row lg:flex-col gap-2 lg:gap-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 lg:w-2xl">
      {items.map((item) => {
        const isActive = item.id === activeItemId;
        return (
          <button
            key={item.id}
            onClick={() => onItemClick(item.id)}
            // AQUI ESTÁ A CORREÇÃO:
            // Trocamos 'w-full' por 'lg:w-full'.
            // Agora, a largura total só é aplicada em telas grandes.
            className={`flex-shrink-0 cursor-pointer flex items-center lg:w-40 p-3 rounded-lg text-left transition-all duration-300 ease-in-out shadow-md
              ${isActive
                ? 'bg-gray-800 text-white shadow-lg'
                : 'bg-gray-950 text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
          >
            <span className="mr-3 text-xl">{item.icon}</span>
            <span className="text-sm font-semibold whitespace-nowrap">{item.title}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default SidebarMenu;