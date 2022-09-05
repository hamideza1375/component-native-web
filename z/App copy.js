
import * as React from 'react';
import { View, Button } from 'react-native';
import Video from '../Components/Video';

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <>
      <Video ref={video}
        source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        onPlaybackStatusUpdate={setStatus}
      />
      <Button title={status.isPlaying ? 'Pause' : 'Play'} onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} />
    </>
  );
}

