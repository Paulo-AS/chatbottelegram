const TelegramBot = require('node-telegram-bot-api')
const dialogflow = require('./dialogflow');
const youtube = require('./youtube');

const token = ''; // token do Telegram

const bot = new TelegramBot( token, { polling: true });

bot.on('message', async function(msg) {
    const chatId = msg.chat.chatId;
    console.log(msg);

    const dfResponse = dialogflow.sendMessage(chatId.toString(), msg.text);

    let responseText = (await dfResponse).text;
    if ((await dfResponse).intent === 'Treino específico') {
        responseText = await youtube.searchVideoURL(responseText, (await dfResponse).fields.corpo.stringValue);
    }

    bot.sendMessage(chatId, responseText);
});