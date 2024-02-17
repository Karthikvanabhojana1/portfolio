import React, { useState, useEffect } from 'react';

function Hithere() {
  const [isWaving, setIsWaving] = useState(false);

  useEffect(() => {
    const waveInterval = setInterval(() => {
      setIsWaving((prevIsWaving) => !prevIsWaving);
    }, 500);

    return () => clearInterval(waveInterval);
  }, []);

  return (
    <div className="text-center">
   <div className="text-5xl font-bold text-white-500 p-10 pt-20 font-caveat">
        Hi There!!!
      </div>

      <div className={`text-4xl transform ${isWaving ? '-rotate-90' : ''}`}>
        👋
      </div>

    <div className="text-4xl p-10">
        <span className='text-fuchsia-700 font-caveat'> I'M </span>
     


     <span className=' text-white-950 font-caveat'>KARTHIK VANABHOJANA</span>
    

    </div>
  </div>
  );
}

export default Hithere;
