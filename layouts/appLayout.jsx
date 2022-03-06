import SideNav from '../components/sideNav'
import TopNav from '../components/topNav'
import { useState } from 'react'

export default function Layout({ children, ...props}) {
  const[toggleNav, setToggleNav]= useState(false)
  const handleToggleNav = ()=>{
    setToggleNav(!toggleNav)
    console.log(toggleNav)
  }
  
  const{title} = props
  return (
    <>
      <main className=' flex w-full h-screen'>
        <SideNav toggleNav={toggleNav} setToggleNav={setToggleNav}/>
        <div className='w-full bg-offWhite h-full'>
          <TopNav title={title} handleToggleNav={handleToggleNav}/>
          <div className=' px-4 xl:px-10 py-10 xl:py-20 h-full '>
            {children}
          </div>
        </div>
      </main>
      
    </>
  )
}
