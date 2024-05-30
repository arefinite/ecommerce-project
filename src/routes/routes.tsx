import { DashboardLayout, RootLayout } from '@/layouts'
import {
  About,
  Contact,
  Error,
  Home,
  LoginRegister,
  ProductDetails,
  Products,
} from '@/pages'
import {
  AddUpdateProduct,
  Dashboard,
  DashboardError,
  ManageProduct,
  Profile,
} from '@/pages/dashboard'
import { createBrowserRouter } from 'react-router-dom'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'product/:id',
        element: <ProductDetails />,
      },
      {
        path: 'login',
        element: <LoginRegister />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    errorElement: <DashboardError />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'manage-product',
        element: <ManageProduct />,
      },
      {
        path: 'add-product',
        element: <AddUpdateProduct />,
      },
      {
        path: 'update-product/:id',
        element: <AddUpdateProduct />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
])
