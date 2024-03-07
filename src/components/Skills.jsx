import Skills1 from "../assets/skills-1.jpg";
import Skills2 from "../assets/skills-2.jpg";
import Skills3 from "../assets/skills-3.jpg";
import Skills4 from "../assets/skills-4.jpg";

const Skills = () => {
  return (
    <div className="lg:mx-12 mx-4 py-20" id="skills">
      <div className="mb-20 flex flex-col sm:flex-row md:items-center justify-between gap-5">
        <div>
          <p className="text-xl text-headingcolor font-semibold mb-5">
            My Skills
          </p>
          <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
            My Expertise
          </h2>
        </div>
      </div>
      {/* skillis card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300">
          <img
            src={Skills1}
            alt=""
            className="w-14 h-14 p-3 bg-white rounded-lg shadow-md mb-7"
          />
          <h3 className="text-2xl font-bold mb-4">Front-end Development</h3>
          <p>
            Front-end development involves designing and coding the user
            interface of a website or application to create a visually appealing
            and interactive experience for users.
          </p>
        </div>
      
      <div className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300">
        <img
          src={Skills2}
          alt=""
          className="w-14 h-14 p-3 bg-white rounded-lg shadow-md mb-7"
        />
        <h3 className="text-2xl font-bold mb-4">Back-end Development</h3>
        <p>
          Back-end development involves creating and maintaining the server-side
          of a software application, handling data storage, processing, and
          server-to-client communication.
        </p>
      </div>
      <div className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300">
        <img
          src={Skills3}
          alt=""
          className="w-14 h-14 p-3 bg-white rounded-lg shadow-md mb-7"
        />
        <h3 className="text-2xl font-bold mb-4">Web Development</h3>
        <p>
          Web development involves building and maintaining websites or web
          applications by writing code, including HTML, CSS, and JavaScript, to
          ensure they function correctly and provide a seamless user experience.
        </p>
      </div>
      <div className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300">
        <img
          src={Skills4}
          alt=""
          className="w-14 h-14 p-3 bg-white rounded-lg shadow-md mb-7"
        />
        <h3 className="text-2xl font-bold mb-4">Web Design</h3>
        <p>Web design refers to the process of planning and creating the visual
          and user interface elements of a website, including layout, colors,
          typography, and graphics, to enhance its aesthetics and user
          experience.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Skills;
