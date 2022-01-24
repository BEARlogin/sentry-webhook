const express = require('express');
const router = express.Router();
const TelegramBot = require('node-telegram-bot-api');


function createEventMessage(req) {
    const data = req.body;
    const event = req.body.event;

    console.log(req.body)

    if(req.body.event_type) {
        return `
Issue: ${req.body.title}    \n
Type:  ${req.body.event_type} \n
    `;
    }

    return `
Issue: ${event.title}    \n
Project: ${data.project_slug} \n
link:  ${data.url} \n
    `;
}

/* GET home page. */
router.post('/webhook', async function (req, res, next) {
    const bot = new TelegramBot(process.env.BOT_TOKEN);
    let message = '';
    if (req.body.event || req.body.event_type)  {
        message = createEventMessage(req);
        await bot.sendMessage(process.env.CHAT_ID, message, {
            parse_mode: "HTML",
        })
    }

    res.send(200);
});


module.exports = router;
