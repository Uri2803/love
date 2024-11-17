import { useRoutes } from 'react-router-dom';

import Home from "./page/Home"
import Img from './page/Img';

function Routes() {
  const routes = [
    {
      path: "/",
      element: <Home />
    },
    {
        path: "/home",
        element: <Home />
      },
    {
        path: "/img",
        element: <Img/> 
      },
   
  ];

  const element = useRoutes(routes);
  return element;
}

export default Routes;
