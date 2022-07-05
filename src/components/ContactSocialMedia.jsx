import { FaTwitter } from 'react-icons/fa';
import { GrFacebook } from 'react-icons/gr';
import { SiInstagram, SiLinkedin } from 'react-icons/si';

const ContactSocialMedia = () => {
    return (
        <ul className='flex space-x-8 mt-6 text-2xl'>
            <li>
                <a href="https://www.linkedin.com/in/manoj-kumar-mondal-3a189b19a" target="_blank" rel="noreferrer">
                    <SiLinkedin className='social-media-icons' />
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/manojkumar.mondal.102" target="_blank" rel="noreferrer">
                    <GrFacebook className='social-media-icons' />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/manoj_kumar_mondal" target="_blank" rel="noreferrer">
                    <SiInstagram className='social-media-icons' />
                </a>
            </li>
            <li>
                <a href="https://twitter.com/MKM_554" target="_blank" rel="noreferrer">
                    <FaTwitter className='social-media-icons' />
                </a>
            </li>
        </ul >
    )
}

export default ContactSocialMedia