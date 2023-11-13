
import { Link } from "react-scroll";
import logo from "../assets/profile.png";



const Home = () => {
  return (
    <div className=" bg-blue-100 " id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
      <div className="md:w-1/2 w-full">
          <img src={logo} alt="" className="w-full" />
        </div>
        {/* left side */}
        <div className="md:w-1/2 w-full mt-5">
          <p className="text-xl text-headingcolor font-semibold mb-5">Hey, I am MohammedZaid</p>
          <h1 className="md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">
            I create <span className="text-primary">product design</span> and Web-apps
          </h1>
          <p className="text-2xl text-body leading-9 mb-8">
          i create web-apps
          </p>
          <Link activeClass="active" smooth={true} spy={true} offset={-100} className="block"  
              to="contact">
          <button className="btn-primary">Get In Touch</button>
          </Link>
        </div>
        {/* rigth side */}
        
      </div>
    </div>
  );
};

export default Home;
