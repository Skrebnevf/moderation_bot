const { Composer } = require ('telegraf')
const moderation = new Composer()
moderation.on('photo', async (ctx) => {
    console.log(ctx.update.message.photo)
})
moderation.on('message', async (ctx) => {
        const word = ctx.message.text.toLowerCase()
        try {
            if (word.includes('путин')) {
                await ctx.deleteMessage()
                }
            if (word.includes('наша компания предлагает')) {
                await ctx.deleteMessage()
                }
            if (word.includes('мы можем предложить вам')) {
                await ctx.deleteMessage()
                }
            if (word.includes('предлагаю услуги')) {
                await ctx.deleteMessage()
                }
            if (word.includes('зеленский')) {
                await ctx.deleteMessage()
                }
            if (word.includes('хохол')) {
                await ctx.deleteMessage()
                }
            if (word.includes('хохлы')) {
                await ctx.deleteMessage()
                }
            if (word.includes('пшеки')) {
                await ctx.deleteMessage()
                }
            if (word.includes('волынь')) {
                await ctx.deleteMessage()
                }
            if (word.includes('спецоперация')) {
                await ctx.deleteMessage()
                }
            if (word.includes('волынская резьня')) {
                await ctx.deleteMessage()
                }
        } catch (e) {
            console.log(e)
        }
        })

module.exports = moderation