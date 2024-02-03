import { TypeAnimation } from 'react-type-animation';


export const  TypewritertestComponent = () => {
  return (
    <TypeAnimation className='text-rose-700 p-10'
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "SOFTWARE DEVELOPER",
        5000, 
        "STUDENT AT NORTHEASTERN UNIVERSITY",
        5000,
        "LEARNING DEVOPS",
        5000,
        "WEB DEVELOPER",
        5000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};