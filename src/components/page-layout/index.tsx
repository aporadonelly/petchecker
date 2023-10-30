import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

import withPage from '@/hocs/with-page';
import Header from './header';
import Sidebar, { SidebarProps } from './sidebar';

interface PageLayoutProps {
  sidebarProps: SidebarProps;
  children: React.ReactNode;
}

const Container = styled('div')({
  display: 'flex',
  minHeight: '100vh',
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  minHeight: `calc(100% - ${theme.mixins.toolbar.minHeight}px)`,
  overflow: 'hidden',
}));

function PageLayout(props: PageLayoutProps) {
  const { sidebarProps, children } = props;

  return (
    <Container>
      <Header />
      <Sidebar {...sidebarProps} />
      <Main>
        <Toolbar />
        {children}
      </Main>
    </Container>
  );
}

export default withPage(PageLayout);
