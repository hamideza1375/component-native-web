import JsFileDownloader from "js-file-downloader"

 const download =(filename) =>{
  new JsFileDownloader({ url: filename })
  .catch((error)=> { console.log(error); })
}

export default download