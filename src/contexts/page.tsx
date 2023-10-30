import { createContext } from 'react';

export interface PageState {
  isSidebarOpen: boolean;
}

export interface PageActions {
  toggleSidebar: () => void;
}

export type PageContextType = PageState & PageActions;

export const PageContext = createContext<PageContextType | null>(null);
