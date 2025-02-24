const axios = require('axios');

async function downLoaderMethod(insta_url){
try {
  const options = {
    method: 'GET',
    url: 'https://instagram-story-downloader-media-downloader.p.rapidapi.com/index',
    params: {url: insta_url },
    headers: {
      'x-rapidapi-key': '3f2fd110e6msh2caec6864af09b8p10f89djsn790a6de8e357',
      'x-rapidapi-host': 'instagram-story-downloader-media-downloader.p.rapidapi.com'
    }
  };

  const response = await axios.request(options)
  const result = {
    videoUrl : response.data.media,
    caption : response.data.caption
  }

  return result


} catch (error) {
  console.log(error+"");
}
  

}

module.exports = {
  downLoaderMethod
}
