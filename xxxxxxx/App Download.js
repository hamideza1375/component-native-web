import React, { useState } from 'react';
import Download from './Components/Download'
function App() {

  const [show, setshow] = useState(true)

  return (
    <Download filename={'https://s32.namasha.com/videos/dl/7374690107-144p/تحلیل-تکنیکال-سولانا-آپدیت-9-شهریور-1401-144p.mp4'} >
      <p>hhh</p>
    </Download>
  )
}



export default App;