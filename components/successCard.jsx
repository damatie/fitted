import Card from "./card";
import Image from 'next/image'
import Link from 'next/link'

export default function SuccessCard({setSuccess}) {
  return (
    <Card>
      <div className="flex text-center flex-col items-center justify-center">
        <div className="">
        <Image
          src="/icon/success.svg"
          alt="img"
          width={300}
          height={300}
        />
        </div>
        <div className="w-1/2">
          <h4 className="font-semibold text-4xl">Yay!!! 🎉</h4>
          <p className="py-5 text-sm text-dark">Your application to become a vetted tailor has been sent, a Fitted Agent will get in touch with you regard the next steps. Goodluck!</p>
        </div>
          <p className='bg-Primary mb-10 font-bold text-offWhite py-4 px-6 rounded-md cursor-pointer' onClick={()=>setSuccess(false)}>Return to Dashboard</p>
      </div>
    </Card>
  )
}