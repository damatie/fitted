import Image from "next/image"
export default function Table(){
  const tableData = [
    {tId:'#790841',tType:'Receive token',date:'12-Jun- 2021',amount:'5 tokens',
    payment:'Token wallet', status:'successful'},
    {tId:'#790841',tType:'Transfer token',date:'12-Jun- 2021',amount:'2 tokens',
    payment:'Token wallet', status:'successful'},
    {tId:'#790841',tType:'Product type',date:'12-Jun- 2021',amount:'#30,000',
    payment:'Card Payment', status:'successful'}
  ]
  return(
   <div className="w-full ">
    <div className=' flex w-full mt-4 space-x-6 px-5 min-w-max '>
      <div className='relative xl:flex-1'>
      <img src="/icon/search.svg" className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-6' alt="" />
      <input type="text"   placeholder='' className=' outline-none text-xs xl:text-sm block w-full bg-transparent border border-gray-400 rounded-2xl py-2.5 pl-12 ' />
      </div>
      <div className=" w-32">
        <span className="  cursor-pointer  flex px-4 py-2 text-sm text-dark  rounded-2xl border border-gray-400 space-x-8 leading-6 ">
          <span className=" inline-block">Actions</span>
          <span className=" inline-block ">
            <Image
            src="/icon/Arrow-Down-2.svg"
            alt="img"
            width={13}
            height={13}
          />
          </span>
        </span>
      </div>
    </div>
    <div className=" min-w-max  ">
      <table class=" w-full text-sm">
        <thead>
          <tr className=" text-left text-greyLight">
          <th className="  pl-5 py-4">
            <input type="checkbox" class="checkbox" />
          </th>
            <th  >Transaction ID</th>
            <th>Transaction type</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Payment</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { tableData && tableData.map((data, index)=>(
            <tr className=" border-t text-dark">
            <td className="pl-5 py-4">
            <input type="checkbox" class="checkbox" />
            </td>
            <td>{data.tId}</td>
            <td>{data.tType}</td>
            <td>{data.date}</td>
            <td>{data.amount}</td>
            <td>{data.payment}</td>
            <td>
              <span className=" bg-[#c2f5d0] text-[#20A144] px-3 py-2 rounded-xl text-xs capitalize">
              {data.status}
              </span>
            </td>
            <td className=" z-0">
            <span className="tabeleDropDown inline-block  pr-1 cursor-pointer  relative">
              <Image
              src="/icon/dots.svg"
              alt="img"
              width={13}
              height={13}
            />
            <div className=" absolute w-56 -right-20 bg-white z-10">
              <span className=" text-dark text-sm block bg-white shadow-primary rounded-3xl px-2 py-4  ">
                <p className="px-3 py-3 rounded-3xl hover:bg-slate-200 ">View more</p>
                <p className="px-3 py-3 rounded-3xl hover:bg-slate-200 ">Download receipt</p>
              </span>
            </div>
            </span>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
   </div>
  )
}