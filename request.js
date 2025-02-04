const axios = require('axios');

async function downloaderMethod(insta_url){
 try{
  const options = {
    method: 'GET',
    url: 'https://instagram-media-downloader.p.rapidapi.com/rapid/post.php',
    params: {url: insta_url},
    headers: {
      'x-rapidapi-key': '334e48845dmsh76943f62ec84287p155053jsn2af2e2f50c2c',
      'x-rapidapi-host': 'instagram-media-downloader.p.rapidapi.com'
    }
  };
  const response = await axios.request(options)
  const result = {
    videoUrl : response.data.video,
    caption : response.data.caption
  }
  return result



 }catch(error){
 console.log(error+'');
 }
}
module.exports = {
  downloaderMethod
}
