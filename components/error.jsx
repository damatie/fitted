export default  function Errors(props) {
  const {error} = props
  return(
    <>
      <div className=" text-left text-red-600 rounded-md py-2 bg-red-100  xl:px-10 px-3 text-xs xl:text-base mt-4">
        {error}
      </div>
    </>
  )
}