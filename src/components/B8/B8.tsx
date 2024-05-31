import { NavLink, Outlet } from 'react-router-dom'
import './B8.css'

export default function B8() {
  return (
    <>
    <nav>
        <NavLink to='' end>Admin</NavLink>
        <NavLink to='account'>Account</NavLink>
        <NavLink to='product'>Product</NavLink>
    </nav>
    <Outlet></Outlet>
    </>
  )
}
