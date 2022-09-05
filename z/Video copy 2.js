import * as React from 'react';
import { ResizeMode, Video as _Video } from 'expo-av';
import { View } from 'react-native';

export default React.forwardRef(function Video(props, ref) {

  return (
    <View style={{alignContent:'center', alignItems:'center', justifyContent:'center',}} >
      <_Video
        ref={ref}
        source={props.source}
        useNativeControls={true}
        resizeMode={'stretch'}
        {...props}
        style={[{ flexGrow:1,width: '100%', height: 330},props.style]}
      />
    </View>


  );
})
