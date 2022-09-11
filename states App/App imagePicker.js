import React, { useState } from 'react';
import { imagePicker, cameraPicker } from './states/imagePicer'


function App() {
  
  const [image, setimage] = useState({})

  return (
    <div>
      <button onClick={() => {
        imagePicker('photo', setimage)
        //! axios.post({image})
      }}>click</button>

    </div>
  );
}

export default App;

