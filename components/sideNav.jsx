import Image from "next/image"
import Link from "next/link"
export default function SideNav(){
  const navLinks = [
    {name:'Measurements', url:'/#', icon:'/icon/tape.svg'},
    {name:'Orders',  url:'/#', icon:'/icon/bag.svg'},
    {name:'Products', url:'/#', icon:'/icon/t-shirt.svg'},
    {name:'Customers', url:'/#', icon:'/icon/group.svg'},
    {name:'My Profile', url:'/', icon:'/icon/user.svg'},
    {name:'Logout', url:'/#', icon:'/icon/logout.svg'}
  ]
  return(
    <nav className="w-3/12 h-screen sideNavBgColor hidden xl:block">
      <div className=" w-full pt-10 text-center">
        <div className=" w-20 h-20 bg-blue-800 mx-auto text-center py-5 rounded-full border borde-white relative">
          <span className=" uppercase font-extrabold text-white text-3xl"> sa</span>
          <div className=" absolute w-10 h-10 bg-slate-100 rounded-full border-4 border-white  -right-11 top-10 text-center py-1 cursor-pointer">
          <Image
            src="/icon/Icon open-pencil.svg"
            alt="edit"
            width={15}
            height={15}
          />
          </div>
        </div>
        <span className=" block  text-2xl text-white mt-4 font-bold">
          Sikiru Agbaje
        </span>
        <span className=" block  text-lg text-white mt-2  font-normal">
        www.tailors.fitted.ng/sikiru
        </span>
        <span className=" block  text-sm text-white mt-1 font-normal">
        Get measurements from any customer via this link
        </span>
        <div className="relative w-40 mx-auto droppDown">
          <div className="innerDropdown bg-white rounded-xl shadow-sm absolute w-60 px-3 py-4 -right-22 top-11 cursor-pointer  text-dark">
              <span className=" text-base font-bold">Apply to be a VETTED Tailor</span>
          </div>
          <div className=" border border-white py-1 pt-1 w-40 justify-center rounded-md mx-auto mt-4 space-x-2 leading-7 flex  cursor-pointer ">
            <span className=" inline-block leading-8 font-normal text-sm text-white rounded-md ">Non -Vetted Tailor</span>
            <span className=" inline-block leading-9">
            <Image
              src="/icon/Arrow-Down.svg"
              alt="edit"
              width={15}
              height={15}
            />
            </span>
          </div>
        </div>
        <div className=" mt-20">
          <ul className="sideNav text-left space-y-5">

            {navLinks.map((item, i) =>(
              <Link href={item.url} key={i}>
                <a>
                  <li  className={`${item.name=="My Profile" ? "activeLi": ''} cursor-pointer space-x-10`}>
                <span>
                <Image
                  src={item.icon}
                  alt="tape"
                  width={20}
                  height={20}
                />
                </span>
                <span> {item.name}</span>
                </li>
                </a>
              </Link>
            ))
              }
          </ul>
        </div>

      </div>
    </nav>
  )
}