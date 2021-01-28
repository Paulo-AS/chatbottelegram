const TelegramBot = require('node-telegram-bot-api')

const token = '1685604401:AAFwF9dMjDr-jX73zqyS4WxNZ3NQaAyUPnc';

const bot = new TelegramBot( token, { polling: true });

bot.on('message', function(msg) {
    const chatId = msg.chat.chatId;
    console.log(msg);
    bot.sendMessage(chatId, 'Obrigado pela mensagem')
;});