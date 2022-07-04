import Link from "next/link";

const NavItems = () => {
    return (
        <>
            <Link href="#">
                <li className="nav-link">Home</li>
            </Link>
            <Link href="#about">
                <li className="nav-link">About</li>
            </Link>
            <Link href="#skills">
                <li className="nav-link">Skills</li>
            </Link>
            <Link href="#projects">
                <li className="nav-link">Projects</li>
            </Link>
            <Link href="#contacts">
                <li className="nav-link">Contacts</li>
            </Link>
        </>
    )
}

export default NavItems