const TelegramBot = require('node-telegram-bot-api');
const token = '7254122209:AAGy33gunbGQgRy2SxbayvRC4ZCdFoNZBQs';
const { downLoaderMethod } = require('./request');
const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (message)=>{
try {
  const chatId = message.chat.id
  const name = message.from.first_name
 
  if(message.text == '/start'){
    const inline = {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: `📮Guruhga qo'shish`,
              url : 'https://t.me/iDown_Instabot?startgroup=on&admin=change_info+delete_messages+restrict_members+pin_messages+manage_video_chats+promote_members+invite_users'
            }
          ]
        ]
      }
    };
   await bot.sendMessage(chatId,`<b>😊Assalomu alaykum ${name} botimizga xush kelibsiz!🕊</b>\n\n<u>⚡️Men Instagramdan media yuklovchi botman💡</u>`,{
      parse_mode: 'HTML',
      reply_markup: inline.reply_markup
     })
  }
  

  const inline = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: `📮Guruhga qo'shish`,
            url : 'https://t.me/iDown_Instabot?startgroup=on&admin=change_info+delete_messages+restrict_members+pin_messages+manage_video_chats+promote_members+invite_users'
          }
        ]
      ]
    }
  };
  const getVideoUrl = await downLoaderMethod(message.text)
  await bot.sendVideo(chatId, getVideoUrl.videoUrl,{
    caption : '<i>Reklama va obunalarsiz yuklovchi bot, qulay va bepul</i> \n <b>@iDown_InstaBot✅</b>',
    parse_mode:'HTML',
    reply_markup: inline.reply_markup
  })


} catch (error) {
  console.log(error+"");
  
}
})
