import { useReducer, useMemo, useCallback } from 'react';

import { PageState, PageActions, PageContext } from '@/contexts/page';

interface PageProviderProps {
  children: React.ReactNode;
}

const initialState: PageState = {
  isSidebarOpen: false,
};

function reducer(state: PageState, action: ReducerAction<PageActions>): PageState {
  switch (action.type) {
    case 'toggleSidebar':
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };

    default:
      return state;
  }
}

function PageProvider(props: PageProviderProps) {
  const { children } = props;

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSidebar = useCallback(() => {
    dispatch({ type: 'toggleSidebar' });
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      toggleSidebar,
    }),
    [state, toggleSidebar]
  );

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}

export default PageProvider;
