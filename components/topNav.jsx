import Image from "next/image"
export default function TopNav(){
  return(
    <div className=" px-4 xl:px-10 xl:py-4 py-2 pb-4 bg-white flex space-x-16">
      <div className=" pt-3 xl:pt-6 cursor-pointer">
        <span className=" hidden xl:block">
        <Image
          src="/icon/back-arrow.svg"
          alt="back"
          width={15}
          height={15}
        />
        </span>
        <span className=" block w-7 h-7 xl:hidden rounded-full bg-slate-300 text-center  leading-8">
        <Image
          src="/icon/back-arrow-2.svg"
          alt="back"
          width={15}
          height={15}
        />
        </span>
      </div>
      <div className=" flex-1 xl:flex-none text-sm  text-center xl:text-left font-semibold xl:text-2xl pt-4">Vetted Tailor Application</div>
      <div className="flex-1 hidden xl:block"></div>
      <div className="pt-4 relative cursor-pointer hidden xl:block">
        <div className="w-5 h-5 bg-orange absolute pt-0.5  font-bold text-white rounded-full text-center -left-4 z-10">
          <span className="text-xs block ">3</span>
        </div>
      <Image
          src="/icon/Notification-2.svg"
          alt="back"
          width={35}
          height={35}
        />
        
      </div>
      <div className="hidden xl:block">
        <div className="  w-14 h-14 cursor-pointer bg-blue-800 mx-auto text-center py-3 rounded-full border-2 border-lighterBlue relative">
            <span className=" uppercase font-extrabold text-white text-xl"> sa</span>
        </div>
      </div>
      <div className="block xl:hidden pt-5 xl:pt-6 cursor-pointer ">
      <span className=" block">
      <Image
          src="/icon/bar.svg"
          alt="back"
          width={15}
          height={15}
        />
      </span>
      </div>
    </div>
  )
}