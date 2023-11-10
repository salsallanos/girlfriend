import './App_copy.css';
import { Bubbles } from './components/Bubbles';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Link } from 'react-router-dom';
import { Congratulations } from './pages/Congratulations';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Bubbles />} />
      <Route path='/congratulations' element={<Congratulations />}/>
      </>
    )
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
