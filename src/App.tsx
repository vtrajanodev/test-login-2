import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Router } from './Router/Router';

function App() {
  const router = createBrowserRouter([
    { path: "*", Component: Router },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
