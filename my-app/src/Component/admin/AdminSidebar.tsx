import React, { useState } from 'react'

import { MdOutlineDashboard } from "react-icons/md"
import { AiOutlineUser } from "react-icons/ai"
import { MdProductionQuantityLimits } from "react-icons/md"
import { MdOutlineCategory } from "react-icons/md"
import { BsBorderAll } from "react-icons/bs"
import { RiCoupon2Line } from "react-icons/ri"
import { MdPayment } from "react-icons/md"
import { MdOutlineLocalOffer } from "react-icons/md"
import { FiLogOut } from "react-icons/fi"
import { AiOutlineCaretDown } from "react-icons/ai"
import { Link, Outlet } from 'react-router-dom'
import { HiMenuAlt3 } from 'react-icons/hi'
import AdminNavbar from './AdminNavbar'

const AdminSidebar = () => {

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const menus = [
    { name: "Dashboard", link: "", icon: MdOutlineDashboard, margin: true },
    { name: "User Management", link: "usermanagement", icon: AiOutlineUser, margin: true },
    { name: "Post Management", link: "postmanagement", icon: MdProductionQuantityLimits, margin: true },
    // { name: "Logout", link: "", icon: MdOutlineCategory, margin: true },
    // { name: "Order", link: "order", icon: BsBorderAll, margin: true },
    // { name: "Coupon", link: "coupon", icon: RiCoupon2Line, margin: true },
    // { name: "Coupon List", link: "couponlist", icon: RiCoupon2Line, margin: true},
    // { name: "Payment", link: "payment", icon: MdPayment, margin: true },
    // { name: "Offer Management", link: "offermanagement", icon: MdOutlineLocalOffer },
  ];
  const [open, setOpen] = useState(true);

  return (
    <>

      <section className="flex">

        <div
          className={`bg-[#2A2A2A] min-h-screen  ${open ? "md:w-72" : "w-16"
            } duration-500 text-gray-100 px-4`}
        >
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />

          </div>

          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={` ${menu?.margin && "mt-5"
                  } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
        <div className='w-full px-5 py-2'>
          <Outlet />
        </div>

      </section>

    </>
  )
}

export default AdminSidebar