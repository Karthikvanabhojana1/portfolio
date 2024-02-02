import React from 'react'
import profileImage from '../../Images/profilepic.jpeg'
import HeaderBanner from './pageheading';
function Home() {
  return (

    <div className='flex flex-col justify-center items-center font-mono    '>
      {/* <HeaderBanner /> */}
      <div className='flex flex-row items-center'>
        <img
          src={profileImage}
          alt='Profile'
          className='w-40 h-40 rounded-full mr-4' // Adjust the size and styling as needed
        />
        <div>
        <h3 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
Karthik Vanabhojana        </h3>
<h4 className="text-2xl leading-7 text-gray-900 sm:truncate sm:text-l sm:tracking-tight">
          Student at Northeastern University
        </h4>        </div>
      </div>

      <div className='text-left mt-10 mr-40 mb-40 ml-40 border-solid border-2 border-sky-500 p-10 bg-slate-400'>
        <p className='text-lg text-slate-800 pb-5' >
          Hey everyone! I'm Karthik Vanabhojana, and I am pursuing my Master's in Information Systems at Northeastern Univeristy Boston. 🎓💻 I'm all about using tech to solve real-life puzzles.
        </p>
        
        <p className='text-lg text-slate-800 pb-5'>
          I'm into Linux, shell scripting, and Golang, and I'm always up for learning and teaming up on cool software projects. I love the fast-paced vibe of tech and can communicate techy stuff in plain English too. 🚀
        </p>

        <p className='text-lg text-slate-800 pb-5'>
          Oh, and I've played around with AWS, Kubernetes, Jenkins, and git – you know, the usual tech party. Plus, I've dabbled in open source, 'cause sharing is caring, right? 🌐
        </p>

        <p className='text-lg text-slate-800 pb-5'>
          If you're looking for someone who's not just about the code but also about the community, hit me up! Let's chat about how I can bring my tech chops and enthusiasm to your team. #TechLife #MasterOfInfoSys #LetsCollaborate
        </p>
      </div>
    </div>
  );
}

export default Home