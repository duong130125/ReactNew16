import { Link, Outlet } from 'react-router-dom'
import './B6.css'
export default function B6() {
  return (
    <>
    <nav>
        <Link to=''>Home</Link>
        <Link to='contacts'>Contact</Link>
    </nav>
    <Outlet></Outlet>
    </>
  )
}
