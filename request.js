const axios = require('axios');

async function downLoaderMethod(insta_url){
try {
  const options = {
    method: 'GET',
    url: 'https://instagram-story-downloader-media-downloader.p.rapidapi.com/index',
    params: {url: insta_url },
    headers: {
      'x-rapidapi-key': 'ff5e4ba351msh453126c4f3bdd15p1ca111jsncb5f37954a62',
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
