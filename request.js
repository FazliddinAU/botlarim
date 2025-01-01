const axios = require("axios");

async function downloaderMethod(insta_url){
   try {
    const options = {
        method : 'GET',
        url : 'https://instagram-scraper-api2.p.rapidapi.com/v1/highlight_info?highlight_id=17907964880010937' ,
       params : {url : insta_url},
        headers : {
           'X-RapidApi-Key': 'b12cfb0fb8msh5c3b6a9f4d10c4bp1bcae9jsn637f7d88bf4f',
           'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'  
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
