import Image from "next/image";
import profilePic from '../assets/images/profilePic2.jpg';
import Title from '../components/Title';

const About = () => {
    return (
        <section id="about" className="w-full py-16 px-10 md:py-20 lg:px-20">
            <Title title="About" />
            <div className="flex flex-col-reverse items-center md:flex-row">
                <div className="w-full mt-10 md:w-[60%] md:mt-0">
                    <p className="text-base sm:text-lg text-green-400">I recently completed my bachelor&#39;s degree in electrical & electronics engineering from IIIT bhubaneswar. I am a full stack developer with tech stack MERN, and I prefer next.js and tailwind css for building beautiful user interfaces, and for the backend, I like express.js and mongoDB  if needed.</p>
                    <p className="mt-5">I believe I have the ability to deliver createive, high-quality web applications using MERN and JavaScript based tools.</p>
                </div>
                <div className="hidden sm:flex items-center justify-center flex-1">
                    <Image
                        src={profilePic.src}
                        alt="Profile Picture"
                        height={300}
                        width={300}
                        objectFit="cover"
                        className="rounded-full test bg-red-500"
                    />
                </div>

                <div className="sm:hidden flex items-center justify-center flex-1">
                    <Image
                        src={profilePic.src}
                        alt="Profile Picture"
                        height={200}
                        width={200}
                        objectFit="cover"
                        className="rounded-full test bg-red-500"
                    />
                </div>

            </div>

        </section>
    )
}

export default About