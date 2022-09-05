import JsFileDownloader from "js-file-downloader"

export const download =(filename) =>{
  new JsFileDownloader({ url: filename })
  .catch((error)=> { console.log(error); })
}