import { createBrowserRouter } from "react-router-dom"
import MainLayout from "@/layouts/MainLayout"
import TransactionList from "@/pages/Transaction/TransactionList"
import TransactionCreate from "@/pages/Transaction/TransactionCreate"
import { action as createTransactionAction } from "@/pages/Transaction/TransactionCreate"
import CategoryList from "@/pages/Category/CategoryList"
import Settings from "@/pages/Settings/Settings"
import CategoryCreate from "@/pages/Category/CategoryCreate"
import { action as createCategoryAction } from "@/pages/Category/CategoryCreate"

export default createBrowserRouter([
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
        element: <Settings />,
      },
      {
        path: "categories",
        element: <CategoryList />,
      },
      {
        path: "categories/create",
        element: <CategoryCreate />,
        action: createCategoryAction,
      },
    ],
  },
])
