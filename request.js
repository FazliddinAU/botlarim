const axios = require("axios");

async function downloaderMethod(insta_url) {
  try {
    const options = {
      method: 'GET',
      url: 'https://instagram-media-downloader.p.rapidapi.com/rapid/post.php',
      params: { url: insta_url },
      headers: {
        'X-RapidAPI-Key': 'b12cfb0fb8msh5c3b6a9f4d10c4bp1bcae9jsn637f7d88bf4f',
        'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    console.log('API Response:', response.data);

    // Ma'lumotlarni ajratib olish
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
