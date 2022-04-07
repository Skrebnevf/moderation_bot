const { Composer } = require ('telegraf')
const hear = new Composer()

hear.hears('wow', async (ctx) => await ctx.reply('слышу wow'))

module.exports = hear