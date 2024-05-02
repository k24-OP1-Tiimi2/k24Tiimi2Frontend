import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="container mx-auto flex justify-center items-center gap-x-4 text-xl text-emerald-600 border-b-2 border-slate-400 p-4 font-mono">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "underline" : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "underline" : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "underline" : undefined)}
        >
          Products
        </NavLink>
        <NavLink
          to="/manufacturers"
          className={({ isActive }) => (isActive ? "underline" : undefined)}
        >
          Manufacturers
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
