import { Routes, Route } from 'react-router-dom';

import { routes } from 'constants/routes';
import ErrorBoundary from 'shared/ErrorBoundry';
import { Post } from 'components/Post';

export const ApplicationRoutes = () => (
  <ErrorBoundary>
    <Routes>
      <Route path={ routes.allBlogs } element={ <Post /> } />
    </Routes>
  </ErrorBoundary>
);
