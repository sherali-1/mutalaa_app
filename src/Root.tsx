import {NavLink, Outlet} from "react-router-dom";


export default function Root() {

    return (<main>
        <header className="p-3">
            <h2 className="text-4xl">
                Fellarni tuslash
            </h2>
            <nav className="flex flex-row gap-5">
                <NavLink to="/task/1">Vazifa 1</NavLink>
                <NavLink to="/task/2">Vazifa 2</NavLink>
                <NavLink to="/task/3">Vazifa 3</NavLink>
            </nav>
        </header>
        <Outlet/>
    </main>)
}