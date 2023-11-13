/* eslint-disable react/no-unknown-property */

import { useEffect, useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
    .then(res => res.json())
    .then (data => setProjects(data))
  }, [])
  return (
    <div className="lg:mx-12 mx-4 my-18" id="portfolio">
      <div className="mb-20 flex flex-col sm:flex-row md:items-center justify-between gap-5">
        <div>
          <p className="text-xl text-headingcolor font-semibold mb-5">
            Portfolio
          </p>
          <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
            My projects
          </h2>
        </div>
        <a href="https://github.com/zaidkazi3008">
        <button className="py-3 px-4 text-white rounded-md bg-black w-2/3 sm:w-auto">
          Visit My Github
        </button>
        </a>
      </div>

      {/* project card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {
            projects.map(project => <div key={project.id} className="shadow-xl rounded-lg">
              <img src={project.image} alt="" />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2 text-headingcolor">{project.name}</h3>
                <p className="text-body mb-4">{project.description}</p>
                <a href={project.link} className="underline underline-offset-8">View In Github <img src="/src/assets/arrow.png" alt="" className="w-3 inline-block ml-3" /></a>
              </div>
            </div>)
          }
      </div>
    </div>
  );
};

export default Portfolio;
