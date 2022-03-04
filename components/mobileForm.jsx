import VerifyBank from '../components/verifyBank'
export default  function MobileForm({banks,setBanks,bankCode,setBankCode,accountNumber,
  setAccountNumber,error,setError,loading,setLoading,handleBandCode,handleAccountNumber,handleSubmit}){
    // console.log(banks)
  return(
    <div className=' w-full xl:w-4/5'>
      <p className='mb-4 text-xs xl:text-sm'>One step closer to the goal! please provide us with your Bank details with which you will be recieving payment.</p>
      <span >
      <VerifyBank banks={banks} setBanks={setBanks} bankCode={bankCode} setBankCode={setBankCode} accountNumber={accountNumber}
            setAccountNumber={setAccountNumber} error={error} setError={setError} loading={loading} setLoading={setLoading}
            handleBandCode={handleBandCode} handleAccountNumber={handleAccountNumber} handleSubmit={handleSubmit}
      />
      </span>
    </div>
  )
}