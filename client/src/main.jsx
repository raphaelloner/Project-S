import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Pages/Layout';
import ErrorPage from './Pages/ErrorPage.jsx';
import PostList from './Pages/PostList.jsx';
import PostCreator from './Pages/PostCreator.jsx';
import Login from './Pages/Login.jsx';
import AuthProvider from './components/AuthContext/AuthContextProvider';
import LandingPage from './Pages/Landing';
import NoAuthorityPage from './Pages/NoAuthorityPage';

const App = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '/',
                    element: <LandingPage />,
                },
                {
                    path: '/login',
                    element: <Login />,
                },
                {
                    path: '/create',
                    element: localStorage.getItem("jwt") !== null ? <PostCreator /> : <NoAuthorityPage />,

                },

                {
                    path: '/posts',
                    element: localStorage.getItem("jwt") !== null ? <PostList /> : <NoAuthorityPage />,
                },
            ],
        },
    ]);


    return (
        <AuthProvider>
            <React.StrictMode>
                <RouterProvider router={router}>

                </RouterProvider>
            </React.StrictMode>
        </AuthProvider>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);