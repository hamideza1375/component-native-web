import React, { useRef, useState } from 'react';
import { View } from 'react-native';

function App(props) {
  const download = useRef()
  return (
    <div onClick={() => { download.current && download.current.click() }} {...props} >
      <a ref={download} href={props.filename} download></a>
      <View >
        {props.children}
      </View>
    </div>
  )
}



export default App;