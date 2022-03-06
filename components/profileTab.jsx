import { useState } from "react"

export default function Tabs({ children,...props}){
  const{tabList, activeTab} = props
  const [toggleTab,setToggleTab] = useState(activeTab)
   const handleToggle = (index) => {
     console.log(index)
    setToggleTab(index)
   }
  return(
    <div className=" w-full">
      <div className="tab-contsiner capitalize flex xl:space-x-3 w-full min-w-max overflow-x-auto xl:text-xl text-xs">
        {tabList && tabList.map((tab, index) => (
          <div key={index}   className="  flex-1 ">
            <p onClick={() =>handleToggle(index)} className="tab ">{tab}</p>
            <span className={toggleTab===index? 'tabActive' : '' }></span>
          </div>
        )
        )}
        
      </div>
      <div className=" w-full bg-white shadow-primary mt-10 rounded-2xl py-5">
        {children && children.map((content, index) =>(
        <div key={index} className={`${toggleTab===index? 'tabContentActive' : ""} tabContent`}>
          {content}
        </div>  
        ))}


      </div>
    </div>
  )
}