const { Composer } = require ('telegraf')
const command = new Composer()
const text = require ('../const')


command.command('start', async (ctx) => {
	try {
		await ctx.reply(`
Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'Анон'}!
Давай балуйся
    `)
	} catch (e) {
		ctx.reply('Я УПАЛЬ!')
	}
})

command.command('help', async (ctx) => {
	try {
		await ctx.reply(text.commands)
	} catch (e) {
		ctx.reply('Я УПАЛЬ!')
	}
})



module.exports = command