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
   <div className="text-4xl font-bold text-white-500 p-10">
        Hi There!!!
      </div>

      <div className={`text-4xl transform ${isWaving ? '-rotate-90' : ''}`}>
        👋
      </div>

    <div className="text-4xl p-10">
        <span className='text-white-700'> I'M </span>
     <span className=' text-rose-700'>KARTHIK VANABHOJANA</span>
    </div>
  </div>
  );
}

export default Hithere;
