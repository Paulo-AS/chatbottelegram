const diealogflow = require('dialogflow');
const configs = require('./dio-bot-fit');

const sessionClient = new diealogflow.SessionsClient({
    projectId: configs.project_id,
    credentials: {
        private_key: configs.private_key,
        client_email: configs.client_email
    }
});

async function sendMessage(chatId, message) {
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: message,
                languageCode: 'pt-BR'
            }
        }
    }

    const response = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    //console.log(JSON.stringify(result, null, 2));\

    return {
        text: result.fulfilmentText,
        intent: result.intent.displayName,
        fields: result.parameters.fields
    }
}

module.exports.sendMessage = sendMessage;