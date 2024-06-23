import React from "react";

function Main() {
  const socials = [
    {
      name: "Linkedin",
      img: "https://img.icons8.com/?size=100&id=8808&format=png&color=8a8b8f",
      link: "https://www.linkedin.com/in/rushikesh-powar-6b310b1a0/",
    },
    {
      name: "LeetCode",
      img: "https://img.icons8.com/?size=100&id=PZknXs9seWCp&format=png&color=8a8b8f",
      link: "https://www.linkedin.com/in/rushikesh-powar-6b310b1a0/",
    },
    {
      name: "GitHub",
      img: "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=8a8b8f",
      link: "https://www.linkedin.com/in/rushikesh-powar-6b310b1a0/",
    },
    {
      name: "Instagram",
      img: "https://img.icons8.com/?size=100&id=32292&format=png&color=8a8b8f",
      link: "https://www.linkedin.com/in/rushikesh-powar-6b310b1a0/",
    },
  ];
  return (
    <div className="main">
      <div className="top">
        <div className="flex justify-center gap-48 mt-32">
          <div className="left w-2/6">
            <h1 className="font-semibold text-5xl text-white leading-normal">
              <span className="text-red-600">Hello,</span> I'm Rushikesh
              Frontend Developer Based in Kolhapur
            </h1>
            <p className="text-white mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              alias dignissimos quos adipisci atque? Impedit obcaecati assumenda
            </p>

            <div className="buttons mt-10">
              <button className="text-white bg-red-600 font-semibold px-8 py-2.5 rounded-lg hover:bg-white hover:text-red-600 duration-300">
                Hire Me
              </button>
              <button className="text-white mr-48 font-semibold hover:text-blue-600 duration-300">
                Download CV <i class="fa fa-arrow-right ml-1"></i>
              </button>
            </div>
          </div>

          <div className="right w-96">
            <img
              src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlM19waG90b19vZl9hX3lvdW5nX2luZGlhbl9tYW5fd2VhcmluZ19jYXN1YWxfY2xvdF9jM2YxZGVlOC01ZmQzLTQzYmUtOGEwZC1kN2RhZGZlN2ZlODMucG5n.png"
              alt=""
            />
          </div>
        </div>

        <div className="socials mt-14 flex justify-center gap-12">
          {socials.map((social) => {
            return (
              <div className="social flex items-center w-60 py-2.5 px-5 rounded-lg">
                <img className="w-12" src={social.img} alt="" />
                <div className="socialContent ml-3">
                  <h1 className="font-semibold text-xl">{social.name}</h1>
                  <a
                    href={social.link}
                    className="font-semibold hover:text-red-600 duration-300"
                  >
                    See My Work
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="about flex justify-center gap-40 mt-32 py-40">
          <div className="left w-2/6">
            <img
              className=""
              src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsb2ZmaWNlM19waG90b19vZl9hX3lvdW5nX2luZGlhbl9tYW5fd2VhcmluZ19jYXN1YWxfY2xvdF9jM2YxZGVlOC01ZmQzLTQzYmUtOGEwZC1kN2RhZGZlN2ZlODMucG5n.png"
              alt=""
            />
          </div>
          <span className="projectsdone px-7 text-center py-4 rounded-md">
            <h1 className="font-bold text-lg text-red-600">15+</h1>
            <p className="font-semibold text-slate-800">Notable Projects</p>
          </span>
          <div className="right w-2/6">
            <span className="text-red-600 text-lg font-semibold">About us</span>
            <p className="font-bold text-4xl mt-2 text-white leading-normal">
              I'm Rushikesh Powar <span className="border-b-2 border-red-600">Frontend Developer</span> Based on Kolhapur
            </p>
            <p className="mt-3 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              architecto quasi repellendus odio atque ipsam voluptatem esse odit
            </p>
            <button className="border border-red-600 py-2.5 px-7 text-white mt-6 rounded-md hover:bg-red-600 hover:text-white duration-300">
              Hire me
            </button>
          </div>
        </div>

        <div className="contactinfo flex justify-evenly mt-28">
          <div className="number w-44 flex flex-col items-center">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#6A2426"
                d="M44.6,-38.9C54.4,-23.3,56.6,-4.9,52.9,12.4C49.2,29.7,39.6,45.9,25.9,51.7C12.3,57.5,-5.4,52.8,-25.7,45.9C-46.1,39,-69,30,-75,14.1C-81.1,-1.8,-70.3,-24.6,-55,-41.5C-39.7,-58.3,-19.8,-69.2,-1.2,-68.2C17.4,-67.3,34.8,-54.5,44.6,-38.9Z"
                transform="translate(100 100)"
              />
            </svg>
            <img
              className="w-20 z-10"
              src="https://img.icons8.com/?size=100&id=9659&format=png&color=ffffff"
              alt=""
            />
            <h2 className=" text-white font-semibold text-2xl mt-4">Call</h2>
            <p className="text-gray-600 mt-2">+918378957472</p>
          </div>

          <div className="mail w-44 flex flex-col items-center">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#6A2426"
                d="M44.6,-38.9C54.4,-23.3,56.6,-4.9,52.9,12.4C49.2,29.7,39.6,45.9,25.9,51.7C12.3,57.5,-5.4,52.8,-25.7,45.9C-46.1,39,-69,30,-75,14.1C-81.1,-1.8,-70.3,-24.6,-55,-41.5C-39.7,-58.3,-19.8,-69.2,-1.2,-68.2C17.4,-67.3,34.8,-54.5,44.6,-38.9Z"
                transform="translate(100 100)"
              />
            </svg>
            <img
              className="w-20 z-10"
              src="https://img.icons8.com/?size=100&id=12580&format=png&color=ffffff"
              alt=""
            />
            <h2 className=" text-white font-semibold text-2xl mt-4">Email</h2>
            <p className="text-gray-600 mt-2">powarrushi02@gmail.com</p>
            <p className="text-gray-600 mt-1">rushipowar7472@gmail.com</p>
          </div>

          <div className="address w-52 flex flex-col items-center">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#6A2426"
                d="M44.6,-38.9C54.4,-23.3,56.6,-4.9,52.9,12.4C49.2,29.7,39.6,45.9,25.9,51.7C12.3,57.5,-5.4,52.8,-25.7,45.9C-46.1,39,-69,30,-75,14.1C-81.1,-1.8,-70.3,-24.6,-55,-41.5C-39.7,-58.3,-19.8,-69.2,-1.2,-68.2C17.4,-67.3,34.8,-54.5,44.6,-38.9Z"
                transform="translate(100 100)"
              />
            </svg>
            <img
              className="w-20 z-10"
              src="https://img.icons8.com/?size=100&id=3723&format=png&color=ffffff"
              alt=""
            />
            <h2 className=" text-white font-semibold text-2xl mt-4">
              Location
            </h2>
            <p className="text-gray-600 mt-2">
              Kumbharwadi, Radhanagari Kolhapur, India 416211
            </p>
          </div>
        </div>

        <div className="bookProject flex justify-center mt-40">
          <div className="book flex justify-between px-8 py-10 w-3/4 rounded-md">
            <h1 className="text-white font-semibold text-2xl">Talk With Me Project in Mind? <span className="border-b-2 border-red-600">Let's Discuss!</span></h1>

            <button className="bg-red-600 py-2.5 px-6 text-white rounded-md hover:bg-red-700 duration-200 font-semibold">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
