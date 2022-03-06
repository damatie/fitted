import Head from 'next/head'
import Layout from '../layouts/appLayout'
import Image from 'next/image'
import ProfileImage from '../components/profileImage'
import Tabs from '../components/profileTab'
import Table from '../components/table'
import Link from 'next/link'
export default function Home() {
 
  return (
    <Layout title="My Profile" >
      <Head>
        <title>Fitted</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main  className=' w-full md:w-11/12 xl:w-10/12 mx-auto'>
        <div className=' xl:h-32 w-full  xl:px-10 xl:pt-10 bg-white xl:bg-gray-200 rounded-2xl '>
          <div  className=' bg-white shadow-primary rounded-2xl px-5  xl:px-5 py-5 xl:flex  xl:space-x-6'>
            <div className='xl:-mt-12 '>
                <ProfileImage/>
            </div>
              <div className=' w-9/12 md:w-3/12 mx-auto xl:mx-0  mt-3 xl:mt-0 xl:w-3/12  xl:border-r-2 border-offWhite'>
                <p className=' font-bold text-xl'>
                  Samuel Oladokun
                </p>
                <div className=' flex flex-col w-full xl:w-full text-xs xl:text-sm mt-3'>
                  <div className=' flex mb-1.5'>
                    <p className='flex-1 text-greyLight font-normal'>
                    Gender:
                    </p>
                    <p className='flex-1 font-normal text-dark text-xs xl:text-sm'> Male</p>
                  </div>
                  <div className=' flex mb-1.5'>
                    <p className='flex-1 text-greyLight font-normal'>
                    Location:
                    </p>
                    <p className='flex-1 font-normal text-dark text-xs xl:text-sm'> Lagos, Nigeria</p>
                  </div>
                  <div className='hidden xl:flex mb-1.5'>
                    <p className='flex-1 text-greyLight font-normal'>
                    Sew Gender:
                    </p>
                    <p className='flex-1 font-normal text-dark text-xs xl:text-sm'> Male</p>
                  </div>
                </div>
              </div>
              <div className='xl:flex-1  flex-col'>
                <div className=' hidden xl:block w-full text-right'>
                  <span className=' cursor-pointer'>
                    <Image
                      src="/icon/edit.svg"
                      alt="img"
                      width={15}
                      height={15}
                    />
                  </span>
                </div>
                <div className='lg:w-4/12 md:w-5/12 xl:w-full mx-auto xl:mx-0  xl:flex  items-center w-full justify-center mt-5 space-y-3 xl:space-y-0'>
                  <span className='flex flex-1 space-x-2 xl:space-x-5'>
                    <span className=' block w-7 h-7 xl:w-10 xl:h-10 rounded-full bg-[#F6EEFF] text-center xl:pt-2.5 pt-1'>
                      {/* <img src="/icon/Call Silent.svg "/> */}
                      <Image
                        src="/icon/Call Silent.svg"
                        alt="img"
                        width={15}
                        height={15}
                      />
                    </span>
                    <span  className=' space-x-2 xl:space-x-0'>
                      <p className=' leading-7 xl:leading-normal inline-block xl:block text-xs xltext-base font-bold text-greyLight'>
                      Phone Number
                      </p>
                      <p className='inline-block xl:block  text-dark text-xs'>
                        +2348958484848
                      </p>
                    </span>
                  </span>
                  <span className='flex flex-1 space-x-2 xl:space-x-5'>
                    <span className=' block w-7 h-7 xl:w-10 xl:h-10 rounded-full bg-[#F6EEFF] text-center xl:pt-2.5 pt-1'>
                      <Image
                        src="/icon/Squircle.svg"
                        alt="img"
                        width={15}
                        height={15}
                      />
                    </span>
                    <span className='space-x-2 xl:space-x-0'>
                      <p className='leading-7 xl:leading-normal inline-block xl:block  text-xs xltext-base font-bold text-greyLight'>
                      Email Address
                      </p>
                      <p className=' inline-block xl:block  text-dark text-xs'>
                        samuelolaleye@gmail.com
                      </p>
                    </span>
                  </span>
                </div>
                <div className=' text-center mt-4 block xl:hidden'>
                  <Link href="/vetted-tailor-application">
                  <button type='button' className='italic text-xs xl:text-base bg-Primary font-medium xl:font-bold text-offWhite  py-3 xl:py-4 px-6 rounded-md'>Apply to be a Vetted Tailor</button>
                  </Link>
                
                </div>
              </div>
          </div>
        </div>
        {/* End Profile Section */}
        <div className=' mt-10 xl:mt-32 w-full xl:w-11/12 mx-auto '>
          <Tabs 
          tabList={['Transaction History','Billing Address','Account Settings']}
          activeTab={0}
          >
            <div className=' hidden xl:block'>
              <Table/>
            </div>
            <div className=' hidden xl:block xl:px-5'> Tab 2</div>
            <div className=' hidden xl:block xl:px-5'> Tab 3</div>
          </Tabs>
        </div>
      </main>
    </Layout>
    )
  }
