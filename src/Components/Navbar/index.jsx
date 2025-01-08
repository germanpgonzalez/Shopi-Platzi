import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShopiContext } from "../../Context";


export const Navbar = () => {

    const context = useContext(ShopiContext);

    const ActiveStyle = 'underline underline-offset-4'

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-white border border-black/10">
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                {context.count}
            </li>
        </ul>
    </nav>
  )
}
