import aboutMe from "../assets/pic2.jpg";
const About = () => {
  return (
    <div className="lg:mx-12 mx-4 mt-10" id="about">
      <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between">
        <div className="sm:w-1/2"> 
          <img src={aboutMe} alt="" className="w-full sm:w-11/12" />
        </div>
        <div className="sm:w-1/2">
          <p className="text-xl text-headingcolor font-semibold mb-5">
            About
          </p>
          <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">About Me</h2>
          <p className="mt-8 md:pr-8 mb-8">
          I am Zaid kazi, IT Professional from Gujarat, India.I have rich experience in Information technology services like Website Development,Website Design and Product Design. 
            <br /> <br />
            I am very much interesting to Coding. So if you have any software related requirements then Contact me. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
