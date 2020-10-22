const express = require('express');
const router = express.Router();
const TelegramBot = require('node-telegram-bot-api');
/* GET home page. */
router.post('/webhook', async function (req, res, next) {
    const bot = new TelegramBot(process.env.BOT_TOKEN);
    console.log(JSON.stringify(req.body));
    const data = req.body;
    const event = req.body.event;
    const message = `
Issue: ${event.title}    \n
Project: ${data.project_slug} \n
link:  ${data.url} \n
    `
    await bot.sendMessage(process.env.CHAT_ID, message, {
        parse_mode: "HTML",
    })
    res.send(200);
});

module.exports = router;
