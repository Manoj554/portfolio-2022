import NavItems from "./NavItems"

const SideNavBar = ({ className, handleClick }) => {
    return (
        <div className={`${className} fixed top-0 left-0 z-50 h-screen w-full bg-transparent`}>
            <ul className={`flex flex-col bg-black min-w-[380px] w-9/12 p-8 pl-16 text-2xl space-y-6`}>
                <h1 className="text-2xl font-bold text-blue-700">Navigation Menu</h1>
                <NavItems />
            </ul>
            <div onClick={handleClick} className="h-full flex-1" />
        </div>
    )
}

export default SideNavBar