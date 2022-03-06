import Image from "next/image"
export default function ProfileImage(){
  return(
    <div className=' shadow-primary rounded-3xl  pt-3  pb-2 w-32 px-3  mx-auto xl:mx-0 bg-white'>
      <Image
        src="/img/avartar.png"
        alt="img"
        width={131}
        height={132}
      />
    </div>
  )
}