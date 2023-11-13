import { Link } from 'react-scroll';
import logo from '../assets/favicon.png';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-bgShade py-6 md:px-12 px-4">
            <div className='flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20'>
                <a href="/"><img src={logo} alt="" /></a>
                <div className='flex flex-col md:flex-row md:items-center gap-4 flex-wrap'>
                <Link activeClass="active" smooth={true} spy={true} offset={-100} 
              to="home"
              className="block text-primary hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Home
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="skills" className="block hover:text-gray-400 py-2 px-4 cursor-pointer">
              Skills
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="about" className="block  hover:text-gray-400 py-2 px-4 cursor-pointer">
              
              About me
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="portfolio" className="block  hover:text-gray-400 py-2 px-4 cursor-pointer">
              
              Portfolio
            </Link>
            <Link activeClass="active" smooth={true} spy={true} offset={-100}  to="testimonials" className="block  hover:text-gray-400 py-2 px-4 cursor-pointer">
              Testimonials
            </Link>
                </div>
                <div className='flex items-center gap-4 ml-4'>
                <a href="https://github.com/zaidkazi3008">
                <FaGithub className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary'/>
                </a>
                <a href="https://twitter.com/Kazizaid7" target="_blank" rel="noopener noreferrer">
                <FaTwitter className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary'/>
                </a>
                <a href="https://www.linkedin.com/in/mohammedzaid-mahammedsiraz-kazi-5175871b5/">
                <FaLinkedin className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary'/>
                </a>
                </div>
            </div>
            <hr />
            <div className='mt-10 flex flex-col md:flex-row justify-between gap-8'>
                <p>Made with 💖 by Mohammedzaid Kazi</p>
                <div className='space-x-6'>
                    <a href="/" className='hover:text-slate-400'>Privacy Policy</a>
                    <a href="/" className='hover:text-slate-400'>Terms of Service</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;