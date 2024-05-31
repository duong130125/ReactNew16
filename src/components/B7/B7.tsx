import { NavLink, Outlet } from "react-router-dom";
import './B7.css'
export default function B7() {
  return (
    <>
    <nav>
        <NavLink to='' end>Home</NavLink>
        <NavLink to='product'>Product</NavLink>
        <NavLink to='detail'>Detail</NavLink>
    </nav>
    <Outlet></Outlet>
    </>
  )
}
