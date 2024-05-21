const Generating = ({ className }) => {
  return (
    <div className={`flex items-center h-[2rem]
     bg-n-7/80 rounded-[1.7rem] 
    ${className || ''}
    text-base justify-center`}>
        <p 
        className='h-5 mr-4 text-n-8 body-2'>
            Take the First Step Towards a Brighter Financial Future.
        </p>
    </div>
  )
}

export default Generating
