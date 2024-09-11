import { Link, Outlet } from "react-router-dom";


export default function Root(){

    return (<main>
        <header className="p-3">
        <h2 className="text-4xl">
          Fellarni tuslash
        </h2>
        <nav className="flex flex-row gap-5">
        <Link to="/task/1">Vazifa 1</Link>
        <Link to="/task/2">Vazifa 2</Link>
        </nav>
      </header>
      <Outlet/>
      </main>)
}