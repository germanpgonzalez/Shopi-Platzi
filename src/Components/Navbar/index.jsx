import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShopiContext } from "../../Context";

export const Navbar = () => {

    const context = useContext(ShopiContext);

    const ActiveStyle = 'underline underline-offset-4'

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
        <ul className="flex items-center gap-3">
            <li className="font-semibold text-lg">
                <NavLink 
                  to='/'>
                 Shopi
                </NavLink>
            </li>
            <li>
                <NavLink 
                 to='/'
                 className={({ isActive }) => isActive ? ActiveStyle : null}
                 >
                 All
                </NavLink>
            </li>
            <li>
                <NavLink 
                 to='/clothes'
                 className={({ isActive }) => isActive ? ActiveStyle : null}
                 >
                 Clothes
                </NavLink>
            </li>
            <li>
                <NavLink 
                 to='/electronics'
                 className={({ isActive }) => isActive ? ActiveStyle : null}
                 >
                 Electronics
                </NavLink>
            </li>
            <li>
                <NavLink 
                 to='/furnitures'
                 className={({ isActive }) => isActive ? ActiveStyle : null}
                 >
                 Furnitures
                </NavLink>
            </li>
            <li>
                <NavLink 
                 to='/toys'
                 className={({ isActive }) => isActive ? ActiveStyle : null}
                 >
                 Toys
                </NavLink>
            </li>
            <li>
                <NavLink 
                 to='/others'
                 className={({ isActive }) => isActive ? ActiveStyle : null}
                 >
                 Others
                </NavLink>
            </li>
        </ul>
        <ul className="flex items-center gap-3">
            <li className="text-black/60">
                usuario@gmail.com
            </li>
            <li>
                <NavLink to='/my-orders'>
                 My Orders
                </NavLink>
            </li>
            <li>
                <NavLink to='/my-account'>
                 My Account
                </NavLink>
            </li>
            <li>
                <NavLink to='/sing-in'>
                 Sing In
                </NavLink>
            </li>
            <li>
                🛒{context.count}
            </li>
        </ul>
    </nav>
  )
}
