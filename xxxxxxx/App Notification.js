import React from 'react';
import { notification } from './Components/notification';
function App() {
  return (
    <>
      <button onClick={() => { notification.create('سلام', 'لذراعدئهئهئ', require('./assets/a1.png')) }} >create</button>
      <button onClick={() => { notification.click(window.location.assign('https://pushjs.org/docs/options')) }} >click</button>
      <button onClick={() => { notification.close() }} >close</button>
    </>
  )
}
export default App;
