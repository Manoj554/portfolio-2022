import Head from "next/head";
import About from "../contents/About";
import Contact from "../contents/Contact";
import IntroSection from "../contents/IntroSection";
import Navbar from "../contents/Navbar";
import Projects from "../contents/Projects";
import Skills from "../contents/Skills";
import { useAppContext } from "../layout/Layout";
import { BsFillArrowUpCircleFill } from 'react-icons/bs';


export default function Home() {
    const { toggleDarkMode } = useAppContext();

    const handleUpClick = () => {
        window.scrollTo(0, 0);
    }

    return (
        <main>
            <Head>
                <title>Manoj Kumar Mondal</title>
            </Head>
            <section className={`${toggleDarkMode ? 'theme-dark' : 'theme-light'} absolute top-0 left-0 pb-20`}>
                <Navbar />
                <IntroSection />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <div className="w-full flex items-center justify-center py-10">
                    <BsFillArrowUpCircleFill onClick={handleUpClick} className="text-5xl cursor-pointer animate-bounce" />
                </div>
            </section>
        </main>
    )
}
