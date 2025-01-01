const axios = require("axios");

async function downloaderMethod(insta_url){
   try {
    const options = {
        method : 'GET',
        url : 'https://instagram-media-downloader.p.rapidapi.com/rapid/post.php' ,
       params : {url : insta_url},
        headers : {
           'X-RapidApi-Key': '3fb0f031femshba140de95f307fdp1ddb9fjsn43c4694c0a30',
           'x-rapidapi-host': 'instagram-media-downloader.p.rapidapi.com'  
        }
       };

    const response = await axios.request(options)
    const result = {
    videoUrl:response.data.video,
    caption:response.data.caption,
    }

    
    return result

   } catch (error) {
    console.log(error+'');
   }
}

module.exports = {
    downloaderMethod
}