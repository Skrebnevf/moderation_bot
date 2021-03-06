const { Telegraf } = require('telegraf')
require('dotenv').config()
const token = process.env.BOT_TOKEN
const bot = new Telegraf(token)


//Мониторинг того, что пользователь зашел/вышел с чата
bot.on('new_chat_members', (ctx) => console.log(ctx.message.message_id))
bot.on('left_chat_member', async (ctx) => await ctx.deleteMessage(ctx.message.message_id))

//Вызов модулей
bot.use(require('./composer/start.composer.js'))
bot.use(require('./composer/exeption.composer.js'))
bot.use(require('./composer/moderation.composer.js'))


bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))