const express = require('express');
const router = express.Router();
const TelegramBot = require('node-telegram-bot-api');
/* GET home page. */
router.get('/webhook', async function (req, res, next) {
    const bot = new TelegramBot(process.env.BOT_TOKEN);
    const issue = req.body.data.issue;
    const message = `
Issue: ${issue.title}    \n
Project: ${issue.project.name} \n
userCount:  ${issue.userCount} \n
link:  ${issue.userCount} \n
    `
    await bot.sendMessage(process.env.CHAT_ID, message, {
        parse_mode: "HTML",
    })
    res.send(200);
});

module.exports = router;
