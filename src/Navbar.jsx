import { Link } from "react-router-dom";
import './App.css';

export default function Navbar() {
    return (
        <div className="App">
            <center>
                <ul className="container mx-auto flex justify-center items-center gap-x-4 text-xl text-emerald-600 border-b-2 border-slate-400 p-4 font-mono">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Product</Link></li>
                    <li><Link to="/manufacturers">Manufacturers</Link></li>
                </ul>
            </center>
        </div>
    )
}