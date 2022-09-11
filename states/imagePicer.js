import { launchImageLibraryAsync as launchImageLibrary, launchCameraAsync as launchCamera} from "expo-image-picker";


  export const imagePicker = (mediaType,setImage) => {
    launchImageLibrary({ mediaType }, (res) => {
      if (!res.didCancel) { let imageName = (new Date().getTime() + Math.random() * 10000).toString() + '.jpg'; setImage({ name: res.assets[0].fileName, type: res.assets[0].type, uri: res.assets[0].uri }, imageName) }
      else console.log('err');
    })
  }


  export const cameraPicker = (mediaType,setImage) => {
    launchCamera({ mediaType }, (res) => {
      if (!res.didCancel) { let imageName = (new Date().getTime() + Math.random() * 10000).toString() + '.jpg'; setImage({ name: res.assets[0].fileName, type: res.assets[0].type, uri: res.assets[0].uri }, imageName) }
      else console.log('err');
    })
  }
