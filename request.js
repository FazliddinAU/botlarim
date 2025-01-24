const axios = require("axios");

async function downloaderMethod(insta_url) {
  try {
    const options = {
      method: 'GET',
      url: 'https://instagram-media-downloader.p.rapidapi.com/rapid/post.php',
      params: { url: insta_url },
      headers: {
        'X-RapidAPI-Key': '26805778c4msha6ae11d23e5645fp13199ajsn701317f584ce',
        'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com'
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
