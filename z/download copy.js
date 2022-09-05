import * as RNFS from 'react-native-fs';
import { notification } from '../notification';

export const download = (imgName, format) => {
  const { displayNotification, cancelAllNotifications, cancelNotification } = notification();
  let prgs;
  RNFS.downloadFile({
    fromUrl: uri,
    toFile: `${RNFS.DownloadDirectoryPath}/${imgName}.${format}`,
    discretionary: true,
    progress: (res) => {
      let progressPercent = (res.contentLength * (100 * res.bytesWritten)).toString()
      prgs = progressPercent.slice(0, 2)
      if (prgs > '96') prgs = '100'
      console.log(prgs)
    },
  }).promise
    .then(() => {
      displayNotification(imgName, prgs + '%')
    })
    .catch((err) => console.log(err))
}
