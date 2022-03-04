import SideNav from '../components/sideNav'
import TopNav from '../components/topNav'

export default function Layout({ children }) {
  return (
    <>
      <main className=' flex w-full'>
      <SideNav />
      <div className='w-full  '>
        <TopNav />
        <div className='px-10 py-20'>
          {children}
        </div>
      </div>
      </main>
      
    </>
  )
}
