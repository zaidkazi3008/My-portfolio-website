const skills = [
    {
      id: 1,
      name: "Front-end Development",
      description:
        "Front-end development involves designing and coding the user interface of a website or application to create a visually appealing and interactive experience for users.",
        image: "src/assets/skills-1.jpg",
    },
    {
      id: 2,
      name: "Back-end Development",
      description:
        "Back-end development involves creating and maintaining the server-side of a software application, handling data storage, processing, and server-to-client communication.",
      image: "src/assets/skills-2.jpg",
    },
    {
      id: 4,
      name: "Web Development",
      description:
        "Web development involves building and maintaining websites or web applications by writing code, including HTML, CSS, and JavaScript, to ensure they function correctly and provide a seamless user experience.",
      image: "src/assets/skills-4.jpg",
    },
    {
      id: 3,
      name: "Web Design",
      description:
        "Web design refers to the process of planning and creating the visual and user interface elements of a website, including layout, colors, typography, and graphics, to enhance its aesthetics and user experience.",
      image: "/src/assets/skills-3.jpg",
    },
  ];

const Skills = () => {

  return (
    <div className="lg:mx-12 mx-4 py-20" id="skills">
      <div className="mb-20">
        <p className="text-xl text-headingcolor font-semibold mb-5">
          My Skills
        </p>
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">My Expertise</h2>
      </div>


      {/* skillis card */}
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {
            skills.map( skill => <div key={skill.id} className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300">
                <img src={skill.image} alt="" className="w-14 h-14 p-3 bg-white bg-white rounded-lg shadow-md mb-7"/>
                <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
                <p>{skill.description}</p>
            </div>)
        }
      </div>
    </div>
  );
};

export default Skills;
