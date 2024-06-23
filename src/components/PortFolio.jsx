import React from 'react'
import Footer from './Footer'

function PortFolio() {

  const projects = [
    {
      title: "WatchRe",
      overview: "This is Movie Site With Watchlist and Real Time Movies Using TMDB API",
      img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTd5bzZtc3hwNHU5eGk5ZjJlN2M4OTR4YnIyOWR6dG8weGphaWN1diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MgJiAntltdDOZJBiZ6/giphy.gif",
      weblink: "https://rp-watchre.netlify.app/",
      githublink: "https://github.com/Rushipowar/WatchRe-Movie-Site",
      tech: "React.js, Tailwind, Api, Redux"
    },
    {
      title: "Gmail Clone",
      overview: "This is gamil clone using html and taiwind css",
      img: "https://www.savvybusinessgals.com/wp-content/uploads/2016/10/gmail-example-image.png",
      weblink: "https://rp-gmailclone.netlify.app/",
      githublink: "https://github.com/Rushipowar/Project-4?tab=readme-ov-file",
      tech: "HTML , Tailwind Css"
    },
    {
      title: "E-Bike Landing Page",
      overview: "This is Modern Landing Page Using HTML and CSS",
      img: "https://www.savvybusinessgals.com/wp-content/uploads/2016/10/gmail-example-image.png",
      weblink: "https://rp-ebike.netlify.app/",
      githublink: "https://github.com/Rushipowar/E-Bike-langing-page",
      tech: "HTML, CSS"
    },
    {
      title: "Personal Porfolio",
      overview: "This is gamil clone using html and taiwind css with responsive design",
      img: "https://www.savvybusinessgals.com/wp-content/uploads/2016/10/gmail-example-image.png",
      weblink: "https://rushyacoder.netlify.app/",
      githublink: "https://github.com/Rushipowar/Personal_Portfolio?tab=readme-ov-file",
      tech: "HTML, CSS, JS, Boostrap"
    },
    {
      title: "Weather Application",
      overview: "This is gamil clone using html and taiwind css with responsive design",
      img: "https://www.savvybusinessgals.com/wp-content/uploads/2016/10/gmail-example-image.png",
      weblink: "https://rp-weather.netlify.app/",
      githublink: "https://github.com/Rushipowar/PRODIGY_WD_05?tab=readme-ov-file",
      tech: "HTML, CSS, Api"
    },
    {
      title: "Json Viewer",
      overview: "This is gamil clone using html and taiwind css with responsive designdsadasdadasdadasdsad",
      img: "https://www.savvybusinessgals.com/wp-content/uploads/2016/10/gmail-example-image.png",
      weblink: "https://excel-viewer-phi.vercel.app/",
      githublink: "https://github.com/Rushipowar/Excel-Viewer",
      tech: "HTML , Tailwind Css"
    },
    {
      title: "NetArt Landing Page",
      overview: "This is gamil clone using html and taiwind css with responsive designdsadasdadasdadasdsad",
      img: "https://www.savvybusinessgals.com/wp-content/uploads/2016/10/gmail-example-image.png",
      weblink: "https://rp-cri-flude.netlify.app/",
      githublink: "https://github.com/Rushipowar/NetArt-Landing-Page-Project",
      tech: "HTML, CSS, Responsive Design"
    },
    {
      title: "React TODO List",
      overview: "This is gamil clone using html and taiwind css with responsive designdsadasdadasdadasdsad",
      img: "https://www.savvybusinessgals.com/wp-content/uploads/2016/10/gmail-example-image.png",
      weblink: "https://rp-react-todolist.netlify.app/",
      githublink: "https://github.com/Rushipowar/React-ToDoList",
      tech: "HTML , Tailwind Css"
    },
    {
      title: "StopWatch",
      overview: "This is gamil clone using html and taiwind css with responsive designdsadasdadasdadasdsad",
      img: "https://www.savvybusinessgals.com/wp-content/uploads/2016/10/gmail-example-image.png",
      weblink: "https://rp-stopwatch.netlify.app/",
      githublink: "https://github.com/Rushipowar/PRODIGY_WD_02?tab=readme-ov-file",
      tech: "HTML , Tailwind Css"
    },
    {
      title: "RedBus Clone",
      overview: "This is gamil clone using html and taiwind css with responsive designdsadasdadasdadasdsad",
      img: "https://www.savvybusinessgals.com/wp-content/uploads/2016/10/gmail-example-image.png",
      weblink: "https://project-3-steel.vercel.app/",
      githublink: "https://github.com/Rushipowar/Project-3",
      tech: "HTML , Tailwind Css"
    },
    {
      title: "DrumKit",
      overview: "This is gamil clone using html and taiwind css with responsive designdsadasdadasdadasdsad",
      img: "https://www.savvybusinessgals.com/wp-content/uploads/2016/10/gmail-example-image.png",
      weblink: "https://drum-kit-project-lyart.vercel.app/",
      githublink: "https://github.com/Rushipowar/DrumKitProject",
      tech: "HTML , Tailwind Css"
    },
    {
      title: "MentorBeep",
      overview: "This is gamil clone using html and taiwind css with responsive designdsadasdadasdadasdsad",
      img: "https://www.savvybusinessgals.com/wp-content/uploads/2016/10/gmail-example-image.png",
      weblink: "https://rp-beep.netlify.app/",
      githublink: "https://github.com/Rushipowar/MentorBeep-Prototype",
      tech: "HTML , Tailwind Css"
    },
  ]

  return (
    <div>
      <div className="header mt-6">
        <h1 className='text-4xl font-bold text-center text-white'>PortFolio <span className='border-b-2 border-red-600'>Projects</span></h1>
      </div>

      <div className="cards flex mt-20 flex-wrap justify-center gap-14">
          {
            projects.map((project)=>{
              return(
                <div className="projectCard px-4 rounded-lg">
                  <div className="image">
                    <img src={project.img} alt="" className='w-68 h-44 mt-7 rounded-lg'/>
                  </div>
                  <div className="content mt-5">
                    <h1 className='border-b-2 border-red-600 w-24 font-bold text-white'>{project.title}</h1>
                    <h2 className='text-white mt-3'>{project.tech}</h2>
                    <p className='text-gray-500 mt-2'>{project.overview}</p>
                  </div>
                  <div className="links flex pb-4 mt-6">
                    <a href={project.weblink} target="_blank" className='mt-3.5'><img className='w-5 hover:scale-110 duration-200' src="https://img.icons8.com/?size=100&id=UMm5uUxFeg9c&format=png&color=ffffff" alt="" /></a>
                    <a href={project.githublink} target="_blank" className='mt-3.5 ml-4'><img className='w-5 hover:scale-110 duration-200' src="https://img.icons8.com/?size=100&id=106567&format=png&color=ffffff" alt="" /></a>
                  </div>
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default PortFolio