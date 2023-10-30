import PageProvider from '@/providers/page';

function withPage<P extends object>(WrappedComponent: React.ComponentType<P>) {
  return (props: P) => (
    <PageProvider>
      <WrappedComponent {...props} />
    </PageProvider>
  );
}

export default withPage;
