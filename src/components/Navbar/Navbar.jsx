import { useState } from "react"
import { NavLink, NavButton } from "../"
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5"
import { logo } from "../../assets"
import "./Navbar.css"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(prevToggle => !prevToggle)
  }

  return (
    // nav bar 
    <nav>
      {/* container */}
      <div className="container p-6 flex justify-between items-center">
        {/* logo */}
        <div>
          <img className="w-[120px] sm:w-[160px] lg:w-[180px] xl:w-[200px]" src={logo} alt="Next Invest Logo" />
        </div>
        {/* nav links */}
        <div className="hidden md:block md:space-x-8">
          <NavLink content="Home" />
          <NavLink content="Offerings" />
          <NavLink content="Paid Out" />
          <NavLink content="Apply" />
        </div>
        {/* buttons */}
        <div className="hidden md:flex md:gap-[16px]">
          <NavButton content="LOGIN" />
          <NavButton content="REGISTER" />
        </div>
        {/* mobile menu & toggle button */}
        <div className="relative md:hidden">
          {/* toggle button */}
          <button
            className="text-3xl text-white"
            onClick={handleToggle}>
            {  toggle ? <IoCloseSharp /> : <IoMenuSharp />}
          </button>
          {/* mobile menu */}
          <div className={`${toggle ? "flex" : "hidden"} max-w-[9rem] absolute top-14 -right-4 slide-up flex-col items-center gap-2 bg-white shadow-xl rounded-lg p-6`}>
            <NavLink content="Home" />
            <NavLink content="Offerings" />
            <NavLink content="Paid Out" />
            <NavLink content="Apply" />
            {/* buttons */}
            <div className="flex flex-col items-center gap-2">
              <NavButton content="LOGIN" />
              <NavButton content="REGISTER" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar