import React, { useRef, useState } from 'react';
import Download from './Components/Download'

function App() {

  const ref = useRef()


  return (
    <>
      <Download ref={ref} />
      <button onClick={() => { if(ref.current) {ref.current.href = 'https://s32.namasha.com/videos/dl/7374690107-144p/تحلیل-تکنیکال-سولانا-آپدیت-9-شهریور-1401-144p.mp4'; ref.current.click()} }} >bynufd</button>
    </>
  )
}



export default App;