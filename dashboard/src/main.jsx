import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import router from './layouts/Routes.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
