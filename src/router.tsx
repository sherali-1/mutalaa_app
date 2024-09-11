import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "./Root";
import Sarf1Table from "./pages/Sarf1Table";
import Sarf2Table from "./pages/Sarf2Table";

const router = createBrowserRouter([
    {
      element: <Root/>,
      children: [
        {
        index: true,
        element: <Navigate to="/task/2"/>
      },
        {
        path: '/task/1',
        element: <Sarf1Table/>
      },
        {
        path: '/task/2',
        element: <Sarf2Table/>
      }
    ]
    },
  ]);


  export default router