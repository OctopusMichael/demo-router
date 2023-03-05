
import {createBrowserRouter} from 'react-router-dom'
import Root from '../layaout/Root'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Skills from '../pages/Skills'
export const router = createBrowserRouter ([
  {
    path : "/",
    element : <Root/>,
    errorElement : <NotFound/>,
    children : [
      {
        index: true,
        path : '/',
        element : <Home/>,
        
      },
      {
       
        path : 'skills',
        element : <Skills/>,
        
      },
      {
        
        path : 'contact',
        element : <Contact/>,
        
      },
    ]
    

  }
])