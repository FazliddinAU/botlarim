const TelegramBot = require('node-telegram-bot-api');
const token = '7254122209:AAGy33gunbGQgRy2SxbayvRC4ZCdFoNZBQs';
const { downloaderMethod } = require('./request');
const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (message) => {
  try {
    const chatId = message.chat.id;
    const name = message.from.first_name;
    if (message.text === '/start') {
      bot.sendMessage(
        chatId,
        `<i> Assalomu alaykum <b>${name}</b> botimizga xush kelibsiz🕊. \n Menga havola yuboring </i>🔹`,
        { parse_mode: 'HTML' }
      );
      return;
    }

    const mediaData = await downloaderMethod(message.text);
    if (mediaData) {
      if (mediaData.videoUrl) {
        await bot.sendVideo(chatId, mediaData.videoUrl, {
          caption: mediaData.caption + '\nOur channel: @fa_live',
        });
      }
      if (mediaData.imageUrl) {
        await bot.sendPhoto(chatId, mediaData.imageUrl, {
          caption: mediaData.caption + '\nOur channel: @fa_live',
        });
      }
      if (mediaData.storyUrl) {
        await bot.sendVideo(chatId, mediaData.storyUrl, {
          caption: 'Hikoya yuklandi!\nOur channel: @fa_live',
        });
      }
    } else {
      bot.sendMessage(chatId, '📮Havola orqali hech narsa topilmadi!');
    }
  } catch (error) {
    console.error('Error:', error);
    bot.sendMessage(
      message.chat.id,
      `❌ Xatolik yuz berdi, qayta urinib ko'ring!`
    );
  }
});
