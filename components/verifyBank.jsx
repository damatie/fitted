import { getBanks,resolveBankAccount } from "../services/apiFactory"
import { useState,useEffect } from "react"

import Errors from "./error"
export default function VerifyBank({banks,setBanks,bankCode,setBankCode,accountNumber,
  setAccountNumber,error,setError,loading,setLoading,handleBandCode,handleAccountNumber,handleSubmit}){


    // console.log(banks.banks.banks)
    // console.log(banks)


//  const getAllBanks =()=>{
//   getBanks().then(res => {
//     const result = res.data.data
//     setBanks(result)
//   })
//  }
//  const handlBandCode = (e) => {
//   const getCode = banks.filter(((bank, index) => bank.name === e.target.value) );
  
//   if(getCode){
//    if(  getCode[0]?.code!==undefined){
//     // console.log(getCode[0]?.code)
//     setBankCode(getCode[0]?.code)
//    }
//   }

//  }

//  const handleAccountNumber =(e)=>{
//   setAccountNumber(e.target.value)
// }

//  const handleSubmit =()=>{
//    const accountData = {
//     "bankCode":bankCode,
//     "accountNo":accountNumber
//   }
//   resolveBankAccount(accountData).then(res => {
//     const applicationResult = res.statusText
//     if(applicationResult==="OK"){
//       setError(null)
//     }
    
//   }).catch((err)=>{
//     if(err){
//       setError('!Invalid account information')
//       console.log(error)
//     }
//   })

  
//  }

console.log(banks)

//  console.log(banks)
//  Onload get data
//  useEffect(()=>{
//   getAllBanks()
//  },[]);

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
     <button type='button' onClick={handleSubmit} className='italic text-xs xl:text-base bg-Primary font-medium xl:font-bold text-offWhite  py-2 xl:py-4 px-6 rounded-md'>Submit Application</button>
     </div>
     {error && error? 
        <Errors error={error} />
         :
        ''
      }
    </form>
  )
}