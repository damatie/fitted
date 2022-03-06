
export default function VerifyBank({banks,loading,handleBandCode,handleAccountNumber,handleSubmit}){

console.log(loading)



  return(
    <form action="">
      <div className=' mb-4 xl:mb-8'>
        <label htmlFor="bank-name" className='text-xs xl:text-base font-semibold text-greyLight'>Bank Name:</label>

        <div className='relative mt-4'>
          <img src="/icon/bank.svg" className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-6' alt="" />
          <input list="bank-list" onChange={handleBandCode} placeholder='Please select your bank' className=' text-xs xl:text-sm block w-full bg-transparent border border-gray-400 rounded-md py-2.5 pl-12 ' id="bank-name" name="bank-name" />
          <datalist  id="bank-list">
            {banks?.map((bank,index) => (
            <option key={index}  value={bank.name} /> 
            ))}
          </datalist>
       
        
        </div>

      </div>
      <div className='xl:mb-8 mb-1'>
        <label htmlFor="" className=' text-xs xl:text-base font-semibold text-greyLight'>Account Number</label>
        <div className='relative mt-4'>
        <img src="/icon/grid-icon.svg" className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-6' alt="" />
        <input type="number"  onChange={handleAccountNumber} placeholder='Please input your account number' className=' text-xs xl:text-sm block w-full bg-transparent border border-gray-400 rounded-md py-2.5 pl-12 ' />
        </div>
      </div>
      
           
     <div className=" xl:text-left text-center mt-4 xl:mt-0">
       { loading==false? (<button type='button' onClick={handleSubmit} className='italic text-xs xl:text-base bg-Primary font-medium xl:font-bold text-offWhite  py-3 xl:py-4 px-6 rounded-md'>Submit Application</button>)
       : 'Checking...'
       }
     
     </div>
    </form>
  )
}