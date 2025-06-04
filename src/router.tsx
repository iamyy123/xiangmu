import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import BookCatalog from './pages/BookCatalog';
import BorrowRecords from './pages/BorrowRecords';
import Login from './pages/Login';
import ReaderManagement from './pages/ReaderManagement';
import { AuthGuard } from './components/AuthGuard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/login', element: <Login /> },
      {
        path: '/',
        element: <AuthGuard><Home /></AuthGuard>,
      },
      {
        path: '/catalog',
        element: <AuthGuard><BookCatalog /></AuthGuard>,
      },
      {
        path: '/records',
        element: <AuthGuard><BorrowRecords /></AuthGuard>,
      },
      {
        path: '/readers',
        element: <AuthGuard><ReaderManagement /></AuthGuard>,
      },
    ],
  },
]);