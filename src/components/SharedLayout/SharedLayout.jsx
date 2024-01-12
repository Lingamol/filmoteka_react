import Container from 'components/Container';
import Header from 'components/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Container>
        <Suspense fallback={'Loading!'}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};
export default SharedLayout;
