/* eslint-disable react/no-unknown-property */
const Portfolio = () => {

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
         <div className="shadow-xl rounded-lg">
              <img src="/src/assets/easybike.jpg" alt="" />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2 text-headingcolor">EasyBikes</h3>
                <p className="text-body mb-4">The Bike Sell and Buy Web App is an online marketplace that connects buyers and sellers of bikes.The platform is designed to provide a user-friendly interface.</p>
                <a href="https://github.com/zaidkazi3008/easybikes" className="underline underline-offset-8">View In Github <img src="/src/assets/arrow.png" alt="" className="w-3 inline-block ml-3" /></a>
              </div>
          </div>
          <div className="shadow-xl rounded-lg">
              <img src="/src/assets/my-port.jpg" alt="" />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2 text-headingcolor">My-portfolio</h3>
                <p className="text-body mb-4"> This is about my personal portfolio website. in this particular project i used React Js, TailwindCss,and some useful frontend libraries. To showcase this skills i made this project.</p>
                <a href="https://github.com/zaidkazi3008/my-portfolio-website" className="underline underline-offset-8">View In Github <img src="/src/assets/arrow.png" alt="" className="w-3 inline-block ml-3" /></a>
              </div>
          </div>
          <div className="shadow-xl rounded-lg">
              <img src="/src/assets/project-3.jpg" alt="" />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2 text-headingcolor">Coming Soon</h3>
                <p className="text-body mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel a asperiores cum nulla ad odit maiores, amet est corporis, vero optio voluptates nemo distinctio deserunt, possimus laborum. Iusto, amet ea.</p>
                <a href="/" className="underline underline-offset-8">View In Github <img src="/src/assets/arrow.png" alt="" className="w-3 inline-block ml-3" /></a>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Portfolio;
