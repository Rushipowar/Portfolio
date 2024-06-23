import React, { useState } from "react";

function Information() {
  const SkillsOne = [
    {
      name: "HTML",
      level: "Intermidiate",
      img: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    },
    {
      name: "CSS",
      level: "Intermidiate",
      img: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
    },
    {
      name: "JavasScript",
      level: "Intermidiate",
      img: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000",
    },
    {
      name: "Tailwind",
      level: "Intermidiate",
      img: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
    },
    {
      name: "Bootstrap",
      level: "Bigginer",
      img: "https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000",
    },
  ];
  const SkillsTwo = [
    {
      name: "React.js",
      level: "Bigginer",
      img: "https://img.icons8.com/?size=100&id=t4YbEbA834uH&format=png&color=000000",
    },
    {
      name: "MongoDB",
      level: "Bigginer",
      img: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
    },
    {
      name: "Node.js",
      level: "Bigginer",
      img: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
    },
    {
      name: "Github",
      level: "intermidiate",
      img: "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=ffffff",
    },
  ];

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className="info">
      <div className="services mt-32 pt-16 flex flex-col justify-center items-center">
        <div className="heading w-96">
          <h1 className="font-bold text-4xl text-white text-center">
            My <span className="border-b-2 border-red-600">Services</span>
          </h1>
          <p className="text-gray-600 text-center mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit
            expedita voluptates blanditiis dolores. Culpa, vero, ducimus
          </p>
        </div>

        <div className="serviceCards flex flex-col flex-wrap mt-14">
          <div className="flex gap-8">
            <div className="card flex justify-between text-white px-8 py-6 rounded-md cursor-pointer duration-300">
              <div className="flex justify-start">
                <img
                  className="w-16"
                  src="https://img.icons8.com/?size=100&id=sXm12ie1GUjg&format=png&color=ffffff"
                  alt=""
                />
                <h2 className="self-center ml-3 font-semibold text-lg">
                  Web Development
                </h2>
              </div>

              <div className="w-12 self-center ml-8">
                <img
                  className="rotate-90 hover:rotate-0 duration-300"
                  src="https://img.icons8.com/?size=100&id=60671&format=png&color=ffffff"
                  alt=""
                />
              </div>
            </div>

            <div className="card flex justify-between text-white px-8 py-6 rounded-md cursor-pointer">
              <div className="flex justify-start">
                <img
                  className="w-16"
                  src="https://img.icons8.com/?size=100&id=4blUZmSrP6xC&format=png&color=ffffff"
                  alt=""
                />
                <h2 className="self-center ml-3 font-semibold text-lg">
                  Product Design
                </h2>
              </div>

              <div className="w-12 self-center ml-8">
                <img
                  className="rotate-90 hover:rotate-0 duration-300"
                  src="https://img.icons8.com/?size=100&id=60671&format=png&color=ffffff"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="flex gap-8 mt-5">
            <div className="card flex justify-between text-white px-8 py-6 rounded-md cursor-pointer duration-300">
              <div className="flex justify-start">
                <img
                  className="w-16"
                  src="https://img.icons8.com/?size=100&id=8tBZNMNsdD4G&format=png&color=ffffff"
                  alt=""
                />
                <h2 className="self-center ml-3 font-semibold text-lg">
                  Business Strateries
                </h2>
              </div>

              <div className="w-12 self-center ml-7">
                <img
                  className="rotate-90 hover:rotate-0 duration-300"
                  src="https://img.icons8.com/?size=100&id=60671&format=png&color=ffffff"
                  alt=""
                />
              </div>
            </div>

            <div className="card flex justify-between text-white px-8 py-6 rounded-md cursor-pointer">
              <div className="flex justify-start">
                <img
                  className="w-16"
                  src="https://img.icons8.com/?size=100&id=aOl7lspmOqPe&format=png&color=ffffff"
                  alt=""
                />
                <h2 className="self-center ml-3 font-semibold text-lg">
                  Marketing
                </h2>
              </div>

              <div className="w-12 self-center ml-7">
                <img
                  className="rotate-90 hover:rotate-0 duration-300"
                  src="https://img.icons8.com/?size=100&id=60671&format=png&color=ffffff"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projectsCounts mt-32 flex justify-center pb-5 border-b-2 border-gray-800">
        <div className="htmlProjects w-64 border-r-2 border-gray-900">
          <h1 className="text-2xl font-bold text-white text-center">20+</h1>
          <p className="text-gray-600 font-semibold text-center mt-1.5">
            HTML Projects
          </p>
        </div>

        <div className="htmlProjects w-64 border-r-2 border-gray-900">
          <h1 className="text-2xl font-bold text-white text-center">20+</h1>
          <p className="text-gray-600 font-semibold text-center mt-1.5">
            HTML Projects
          </p>
        </div>

        <div className="htmlProjects w-64 border-r-2 border-gray-900">
          <h1 className="text-2xl font-bold text-white text-center">20+</h1>
          <p className="text-gray-600 font-semibold text-center mt-1.5">
            HTML Projects
          </p>
        </div>

        <div className="htmlProjects w-64 border-r-2 border-gray-900">
          <h1 className="text-2xl font-bold text-white text-center">20+</h1>
          <p className="text-gray-600 font-semibold text-center mt-1.5">
            HTML Projects
          </p>
        </div>

        <div className="htmlProjects w-64">
          <h1 className="text-2xl font-bold text-white text-center">20+</h1>
          <p className="text-gray-600 font-semibold text-center mt-1.5">
            HTML Projects
          </p>
        </div>
      </div>

      <div className="skills pt-16 flex flex-col items-center">
        <div className="heading w-96">
          <h1 className="font-bold text-4xl text-white text-center">
            My <span className="border-b-2 border-red-600">Skills</span>
          </h1>
          <p className="text-gray-600 text-center mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            porro? Dolore deleniti ab et tenetur magni natus quidem hic tempora,
          </p>
        </div>

        <div className="skillsContainer flex gap-20 mt-10">
          <div className="left">
            {SkillsOne.map((skill) => {
              return (
                <div className="skillCard flex border-b-2 border-gray-800 mt-3 py-2">
                  <img
                    className="w-16 p-2 bg-gray-900 rounded-full"
                    src={skill.img}
                    alt=""
                  />

                  <div className="self-center ml-2">
                    <h2 className="text-white font-bold">{skill.name}</h2>
                    <p className="text-gray-600 mt-1">{skill.level}</p>
                  </div>

                  <div className="self-end ml-52 mb-3 text-gray-400">
                    <i class="fa fa-square-up-right text-white"></i>
                    <p>2023 - Curret</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="right">
            {SkillsTwo.map((skill) => {
              return (
                <div className="skillCard flex border-b-2 border-gray-800 mt-3 py-2">
                  <img
                    className="w-16 p-2 bg-gray-900 rounded-full"
                    src={skill.img}
                    alt=""
                  />

                  <div className="self-center ml-2">
                    <h2 className="text-white font-bold">{skill.name}</h2>
                    <p className="text-gray-600 mt-1">{skill.level}</p>
                  </div>

                  <div className="self-end ml-52 mb-3 text-gray-400">
                    <i class="fa fa-square-up-right text-white"></i>
                    <p>2023 - Current</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="experince pt-24 flex flex-col items-center">
        <div className="heading w-96">
          <h1 className="font-bold text-4xl text-white text-center">
            My <span className="border-b-2 border-red-600">Experince</span>
          </h1>
          <p className="text-gray-600 text-center mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            porro? Dolore deleniti ab et tenetur magni natus quidem hic tempora,
          </p>
        </div>

        <div className="expre mt-20 flex gap-20">
          <div
            className="ngo flex px-20 py-5 rounded-lg cursor-pointer"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <img
              className="rounded-md"
              src="https://lirp.cdn-website.com/3f4c882c/dms3rep/multi/opt/team-everest-logo-89h.png"
              alt="Team Everest Logo"
            />

            <div className="ml-5">
              <h1 className="text-white font-semibold text-xl">
                Team Everest NGO
              </h1>
              <p className="text-gray-300 mt-1 font-semibold">Content Writer</p>
              <p className="text-gray-300">Internship / 1 Month</p>
            </div>

            {isHovered && (
              <div className="experinceDetails absolute w-80 bg-gray-300 text-black right-40 px-5 py-3 rounded-lg">
                <p>
                  -Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia reiciendis sit exercitationem repellendus autem at
                  blanditiis ullam odio ipsa minima, est sunt mollitia possimus
                  eaque molestiae numquam, vero officiis provident.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
