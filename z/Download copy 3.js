import React, { useEffect, useRef } from 'react';
const App = React.forwardRef((props,ref) =>{

  // useEffect(() => {
  //   ref?.current && ref.current.click()
  // }, [])
  

  return <a ref={ref} href={props.filename} download></a>
})



export default App;