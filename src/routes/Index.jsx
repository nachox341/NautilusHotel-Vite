import { Route } from 'react-router-dom'

import { Home } from '../pages/Home.jsx'
import { Room } from '../pages/Room.jsx'
import { About } from '../pages/About.jsx'
import { Contact } from '../pages/Contact.jsx'
import { Login } from '../pages/Login.jsx'
import { Signup } from '../pages/Signup.jsx'

export const renderRoutes = () => {
    return (
        routes.map((route) => {
            return <Route path={route.path} element={route.element} />
        })
    )
}

export const routes = [
    {
        path: '/',
        element: <Home />,
    },

    {
        path: '/Room',
        element: <Room />,
    },

    {
        path: '/About',
        element: <About />,
    },

    {
        path: '/Contact',
        element: <Contact />,
    },

    {
        path: '/Login',
        element: <Login />,
    },

    {
        path: '/Signup',
        element: <Signup />,
    }
];