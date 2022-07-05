const SkillBox = ({ Component, name }) => {
    return (
        <div className=' flex py-4 flex-col  items-center justify-start w-full '>
            <Component className=" h-12 w-auto animate-bounce" />
            <h2 className='text-lg font-semibold mt-2 animate-pulse'>{name}</h2>
        </div>
    )
}

export default SkillBox