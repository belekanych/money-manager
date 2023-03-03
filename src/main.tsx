import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import MainLayout from "./layouts/MainLayout"
import TransactionList from "./pages/Transaction/TransactionList"
import { Provider } from "react-redux"
import store from "./store"
import TransactionCreate from "./pages/Transaction/TransactionCreate"
import { action as createTransactionAction } from "./pages/Transaction/TransactionCreate"

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
        element: <TransactionCreate />,
        action: createTransactionAction,
      },
      {
        path: "settings",
        element: <div>Settings</div>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
