import React from 'react';
import Mainlayout from './Layout/Mainlayout';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Products from './pages/Products';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Mainlayout />}>
      <Route index element={<Homepage />} />
      <Route path="products" element={<Products />} />
      
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App