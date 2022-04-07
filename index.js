const { Telegraf } = require('telegraf')
require('dotenv').config()

const token = process.env.BOT_TOKEN
const bot = new Telegraf(token)

bot.use(require('./composer/start.composer.js'))
bot.use(require('./composer/hear.composer.js'))
bot.use(require('./composer/moderation.composer.js'))

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))