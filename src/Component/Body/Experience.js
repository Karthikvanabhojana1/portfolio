import React, { useState } from "react";

const initialExperiences = [
  {
    title: "Custom Software Engineering Analyst",
    company: "Accenture Bengaluru, India",
    duration: "Feb. 2023 - Jun. 2023",
    description: "Developed unique libraries in Java to simplify logging and exception handling, reducing code complexity by 10% and ensuring adaptability to evolving data landscapes. Implemented ELK (Elasticsearch, Logstash, Kibana) for log aggregation, enhancing data transfer from client servers to the marketplace layer during the development of the data catalog. Leveraged Spring Boot framework for streamlined integration of ELK into the application architecture, ensuring efficient data flow and monitoring capabilities.",
  },
  {
    title: "Custom Software Engineering Associate",
    company: "Accenture Bengaluru, India",
    duration: "Aug. 2022 - Jan. 2023",
    description: "Orchestrated a robust API layer using Java, MVC, Hibernate, and Spring Boot to seamlessly integrate vendor and host systems, enhancing data sharing and system compatibility, which resulted in a significant 15% reduction in production lead time, optimizing operational efficiency and accelerating project delivery. Implemented the practices of prioritized peer-review methodologies, following through on enhancing code quality and fostering team collaboration within the Agile software context.",
  },
  {
    title: "Application Development Associate",
    company: "Accenture Bengaluru, India",
    duration: "Jan. 2021 - Jul. 2022",
    description: "Engineered a marketplace data catalog using Java, GraphQL, REST, and SQL for seamless data transmission across applications via APIs Utilized Git and GitHub for version control and collaboration, ensuring seamless integration of these libraries into the project workflow Exhibited strong problem-solving skills, adeptly analyzing complex issues, and implementing innovative solutions to foster acollaborative and productive work environment"},
];

function WorkExperience() {
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  const toggleShowAllExperiences = () => {
    setShowAllExperiences(!showAllExperiences);
  };

  const displayExperiences = showAllExperiences ? initialExperiences : initialExperiences.slice(0, 2);

  return (
    <div className="px-20">
      <div className="px-20">
        <h2 className="px-9 text-2xl font-bold text-gray-900 text-white text-3xl text-bold pb-10">Work Experience</h2>
        <div className="text-lg text-slate-800 pb-10  text-white text-justify text-2xl">
          {displayExperiences.map((experience, index) => (
            <div key={index} className={showAllExperiences || index < 2 ? 'bg-fuchsia-900 bg-opacity-25 pb-4 px-11 mb-4' : 'border border-fuchsia-500 bg-transparent pb-4 px-4 d-none'}>
              <div>
                <h3 className="mb-2">{experience.title}</h3>
                <p className="mb-2">{experience.company}</p>
                <p className="mb-2">{experience.duration}</p>
                <ul className="list-disc ml-6">
                  {experience.description.split('. ').map((item, i) => (
                    <li key={i} className="mb-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {!showAllExperiences && initialExperiences.length > 2 && (
            <button className="text-white" onClick={toggleShowAllExperiences}>Read more</button>
          )}
          {showAllExperiences && (
            <button className="text-white" onClick={toggleShowAllExperiences}>Read less</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
