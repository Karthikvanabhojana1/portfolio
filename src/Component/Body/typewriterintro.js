import { TypeAnimation } from 'react-type-animation';

export const TypewritertestComponent = () => {
  return (
    <TypeAnimation className='text-white-950 p-10 font-shadows-into-light'
      sequence={[
        "I'M ", 
        0,
        "I'M SOFTWARE DEVELOPER",
        4000,
        "I'M STUDENT AT NORTHEASTERN UNIVERSITY",
        4000,
        "I'M DEVOPS ENGINEER",
        4000,
        "I'M WEB DEVELOPER",
        4000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};
