import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const MoveToTop = () => {

    const handleUpClick = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className="w-full flex items-center justify-center py-10">
            <BsFillArrowUpCircleFill onClick={handleUpClick} className="text-5xl cursor-pointer animate-bounce" />
        </div>
    )
}

export default MoveToTop;