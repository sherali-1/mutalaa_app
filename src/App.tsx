import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  return (
    <div >
      
      <RouterProvider router={router} />
      {/* <Sarf2Table />
      <Sarf1Table /> */}
    </div>
  );
}

export default App