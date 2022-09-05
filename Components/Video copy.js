import Video from "react-native-video";


export const Video = (uri) => {
  return (
    <View>
      <Video
        muted={false}
        repeat={false}
        resizeMode={"cover"}
        controls={true} 
        rate={1.0}
        ignoreSilentSwitch={"ignore"} 
        source={{ uri }} />
    </View>
  )
}






// import Video, { TextTrackType } from "react-native-video";



// <Video muted={false} repeat={false} resizeMode={"cover"}
// controls={true} style={{ width: '100%', height: land !== PORTRAIT ? Height : 300 }} rate={1.0}
// ignoreSilentSwitch={"ignore"} source={{ uri: `http://192.168.42.34/upload/${videoUrl}` }}
// // hideShutterView={true}
// // fullscreenOrientation={'portrait'}
// // mixWithOthers={'duck'}
// // paused={player}
// // pictureInPicture={true}
// // playInBackground={true}
// // poster="https://baconmockup.com/300/200/"
// // posterResizeMode={'cover'}
// // preferredForwardBufferDuration={20}
// // rate={0}
// // reportBandwidth={true}
// // volume={0.1}
// // onEnd={() => console.log('eenndd')}
// // onLoad={()=>console.log("llooaadd")}
// // stereoPan={-0.1}
// // onPictureInPictureStatusChanged={{isActive: true}}
// // onProgress={{
// //   currentTime: 5.2,
// //   playableDuration: 34.6,
// //   seekableDuration: 888
// // }}
// // stereoPan={0.1}
// // ref={(ref) => { setPlayer(ref) }}
// // ref={video}
// // bufferConfig={{
// // minBufferMs: 150000,
// // maxBufferMs: 500000,
// // bufferForPlaybackMs: 25000,
// // bufferForPlaybackAfterRebufferMs: 500000
// // }}
// // onBuffer={onBuffer}                // Callback when remote video is buffering
// />