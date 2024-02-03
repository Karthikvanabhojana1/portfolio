import React from 'react';
import Basecomponent from './Component/basecomponent'
import './';
import BackgroundVideo from './Component/bgvid';

function App() {
  return (
//     <div className="App font-mono" style={{ backgroundImage: 'url("https://res.cloudinary.com/djpqqdkqg/video/upload/v1706916403/vidbackground_yi7ct8.mp4")' }}>
// <Basecomponent/>

//  </div>

    <div className="App font-mono text-white" >
      <BackgroundVideo />
      <Basecomponent/>
         </div>
  );
}

export default App;
