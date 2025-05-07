const axios = require('axios');

async function downLoaderMethod(insta_url){
try {
  const options = {
    method: 'GET',
    url: 'https://instagram-story-downloader-media-downloader.p.rapidapi.com/index',
    params: {url: insta_url },
    headers: {
      'x-rapidapi-key': 'c8e8b1a026msha33e93d349fe1c9p118e2bjsnf73a00508f6f',
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
