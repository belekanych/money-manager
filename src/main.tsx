import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import MainLayout from './layouts/MainLayout';
import TransactionList from './pages/Transaction/TransactionList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "transactions",
        element: <TransactionList />,
      },
      {
        path: "transactions/create",
        element: <div>Add new transaction</div>
      },
      {
        path: "settings",
        element: <div>Settings</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
