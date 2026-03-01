import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import BrevoForm from "./BrevoForm";

<BrevoForm />
function App() {
  return <RouterProvider router={router} />;
}

export default App;
