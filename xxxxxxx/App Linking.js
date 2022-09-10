
import React from 'react'
import { View,Text } from 'react-native'
import { Linking } from './Components/Linking'

function App() {

  return (
    <View  >
      <Text onPress={()=>Linking('http://github.com')} >link</Text>
    </View>
  )
}

export default App