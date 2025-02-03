const axios = require("axios");

async function downloaderMethod(insta_url) {
  try {
    const options = {
      method: 'GET',
      url: 'https://instagram-downloader-download-instagram-videos-stories1.p.rapidapi.com/get-info-rapidapi',
      params: { url: insta_url },
      headers: {
        'X-RapidAPI-Key': '599dc14713msh1e8b59825e43e3ap19f9cfjsn1fc776d4c34e',
        'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories1.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    console.log('API Response:', response.data);

    
    const result = {
      videoUrl: response.data.video || null,   // Video URL
      imageUrl: response.data.image || null,  // Rasm URL
      storyUrl: response.data.story || null,  // Hikoya URL
      caption: response.data.caption || null, // Rasm yoki video izohi
    };

    return result;
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    return null;
  }
}

module.exports = {
  downloaderMethod
};
