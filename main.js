const TelegramBot = require('node-telegram-bot-api');
const token = '7254122209:AAGy33gunbGQgRy2SxbayvRC4ZCdFoNZBQs';
const {downloaderMethod}=require('./request')
const bot = new TelegramBot(token, {polling: true});


bot.on('message', async(message)=>{
    try {
        
        const chatId = message.chat.id;
    const name = message.from.first_name
    
    if(message.text=='/start'){
        bot.sendMessage(chatId, ` <i> Assalomu alaykum <b> ${name} </b> botimizga xush kelibsiz🕊. \n Menga havola yuboring </i>🔹`,{
            parse_mode: 'HTML'
        })
    } 
    const getVideoUrl = await downloaderMethod(message.text)
    await bot.sendVideo(chatId, getVideoUrl.videoUrl,{
        caption: getVideoUrl.caption + '\n Our channel: @fa_live'
    })

 
    

     
    } catch (error) {
        console.log(error+"");
    }
})