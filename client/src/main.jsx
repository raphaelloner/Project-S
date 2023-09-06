import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom';
import Layout from './Pages/Navbar/Navbar'
import ErrorPage from './Pages/ErrorPage.jsx';
import Posts from './Pages/Posts.jsx';
import PostCreator from './Pages/PostCreator.jsx';
import Login from './Pages/Login.jsx';
import AuthProvider from './components/AuthContext/AuthContextProvider';
import LandingPage from './Pages/Landing';
import NoAuthorityPage from './Pages/NoAuthorityPage';
import Register from './Pages/Register';
import Answers from './Pages/Answers';

const App = () => {
    const params = useParams();
    console.log(params)

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '/landing',
                    element: <LandingPage />,
                },
                {
                    path: '/login',
                    element: <Login />,
                },
                {
                    path: '/register',
                    element: <Register />,
                },
                {
                    path: '/create',
                    element: <PostCreator /> //localStorage.getItem("jwt") !== null ? <PostCreator /> : <NoAuthorityPage />,

                },
                {
                    path: '/posts',
                    element: <Posts />,//localStorage.getItem("jwt") !== null ? <PostList /> : <NoAuthorityPage />
                },
                {
                    path: '/answers/:id',
                    element: <Answers />,
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