const { Composer } = require ('telegraf')
const moderation = new Composer()

moderation.on('message', async (ctx) => {
    const word = ctx.message.text.toLowerCase()
    try {
        if (word.includes('Всякие слова не хорошие')) {
            await ctx.deleteMessage()
            }
    } catch (e) {
        ctx.reply('Я УПАЛЬ!')
    }
    })
    
moderation.on('photo', (ctx) => {
        ctx.reply('Зачем мне пикча? Иди работай!')
    })

module.exports = moderation