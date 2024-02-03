import React from 'react'
import profileImage from '../../Images/profilepic.jpeg'
import HeaderBanner from './pageheading';
import { TypewritertestComponent } from './typewriterintro';
import Hithere from './Hithere';
function Home() {
  return (

    <div className='flex flex-col justify-center items-center text-white	  '>

      <Hithere className='w-50'/>
      <TypewritertestComponent />
        <h1 className='text-center  text-4xl pt-20'>LET ME INTRODUCE MYSELF</h1>
<div className='flex flex-row justify-center'>
<div className='text-left mt-10 mr-40 mb-10 ml-40  p-10 '>
        <p className='text-lg text-slate-800 pb-10 text-white' >
          Hey everyone! I'm Karthik Vanabhojana, and I am pursuing my <span className=' text-rose-700'>Master's in Information Systems at Northeastern Univeristy Boston</span>. 🎓💻 I'm all about using tech to solve real-life puzzles.
        </p>
        
        <p className='text-lg text-slate-800 pb-10  text-white'>
          I'm into <span className=' text-rose-700'>Linux, shell scripting, and Java</span>, and I'm always up for learning and teaming up on cool software projects. I love the fast-paced vibe of tech and can communicate techy stuff in plain English too. 
        </p>

        <p className='text-lg text-slate-800 pb-10  text-white'>
          Oh, and I've played around with <span className=' text-rose-700'>AWS, Kubernetes, Jenkins, and git </span>– you know, the usual tech party. Plus, I've dabbled in open source, 'cause sharing is caring, right? 🌐
        </p>

        <p className='text-lg text-slate-800 pb-10  text-white'>
In addition to that I have worked in Accenture for two years as <span className='text-rose-700'>Java Backend Developer in Bangalore </span>where I have worked on various projects and have gained experience in various technologies such as <span className='text-rose-700'>springboot, microservices, swagger, Junit, Mockito, JPA, Hibernate, Oracle, MySQL, Kafka, Git, JIRA, Agile, Scrum,</span> etc.
        </p>

        <p className='text-lg text-slate-800 pb-10  text-white'>
          If you're looking for someone who's not just about the code but also about the community, hit me up! Let's chat about how I can bring my tech chops and enthusiasm to your team. #TechLife #MasterOfInfoSys #LetsCollaborate
        </p>
      </div>
      <div className='text-center mt-10'>

      <image className='pr-10' src='https://res.cloudinary.com/djpqqdkqg/image/upload/v1706936212/istockphoto-1343774595-612x612_zyo4v2.jpg' alt='Description of the image' />

        </div>
</div>
     
    </div>
  );
}

export default Home