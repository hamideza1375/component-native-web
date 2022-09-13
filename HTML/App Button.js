import React from 'react';
import { View } from 'react-native';
import {Button} from './components/Html';


const App = () => {
  return (
    <View style={{borderWidth:3, flex:1}} >
      <Button
        outline
        bgcolor={'red'}
        color={'red'}
        border={[1, 'green']}
        fontSize={17}
        // h={46}
        // w={101}
        // p={11}
        // pt={11}
        // pb={11}
        // pl={11}
        // pr={11}
        // pv={11}
        // ph={11}
        // m={11}
        // mt={'auto'}
        // mb={'auto'}
        // ml={11}
        // mr={11}
        mv={'auto'}
        mh={'auto'}
        // alignSelf={'center'}
        onClick={() => { alert(9) }}
      >
        onClick
      </Button>

    </View>
  )
}
export default App