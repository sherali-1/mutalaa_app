import {createHashRouter, Navigate} from "react-router-dom";
import Root from "./Root";
import Sarf1Table from "./pages/Sarf1Table";
import Sarf2Table from "./pages/Sarf2Table";
import Sarf3Table from "./pages/Sarf3Table.tsx";
import VerbsIIITable from "./pages/VerbsIIITable.tsx";
import Dictionary from "./pages/Dictionary.tsx";
import Sarf4Table from "./pages/Sarf4Table.tsx";

const router = createHashRouter([
    {
      element: <Root/>,
      children: [
        {
        index: true,
        element: <Navigate to="/task/3"/>
      },
        {
        path: '/task/1',
        element: <Sarf1Table/>
      },
        {
        path: '/task/2',
        element: <Sarf2Table/>
      },
        {
        path: '/task/3',
        element: <Sarf3Table/>
      },
        {
        path: '/task/4',
        element: <Sarf4Table/>
      },
        {
        path: '/task/form_3',
        element: <VerbsIIITable/>
      },
        {
        path: '/dictionary',
        element: <Dictionary/>
      }
    ]
    },
  ]);


  export default router