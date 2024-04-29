import './App.css'
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className='container mx-auto flex justify-center items-center gap-x-2 text-xl text-emerald-600 border-b-2 border-slate-400 p-4'>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/manufacturers"}>Manufacturers</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App
