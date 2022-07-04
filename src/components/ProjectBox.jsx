/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Link from 'next/link';

const ProjectBox = ({ id, image, techStack, projectName, link }) => {
    const [flip, setFlip] = useState(false);

    return (
        <div onMouseEnter={() => setFlip(true)} onMouseLeave={() => setFlip(false)} className='relative top-0 h-[260px] lg:h-[340px] w-full shadow-lg shadow-gray-700'>
            {flip && (
                <div className='absolute top-0 z-10 bg-red-700 h-full w-full flex flex-col items-center justify-center space-y-4 transition duration-500 ease-in animate-pulse'>
                    <h3 className='font-bold text-2xl text-white'>{projectName}</h3>
                    <div className='text-yellow-300 font-semibold'>{techStack}</div>
                    <Link href={`project?id=${id}`}>
                        <button className='py-2 px-6 bg-white font-medium rounded-lg text-black hover:bg-black hover:text-white'>Learn More</button>
                    </Link>
                    <a href={link}>
                        <button className='py-2 px-6 border-gray-300 hover:border-2 font-medium rounded-lg hover:text-gray-400  bg-black text-white'>visit website</button>
                    </a>
                </div>)}

            <div className='absolute z-0 top-0 h-full w-full'>
                <img src={image} alt="project image" className='w-full h-full' />
            </div>

        </div>
    )
}

export default ProjectBox