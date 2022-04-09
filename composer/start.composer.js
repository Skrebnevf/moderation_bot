const { Composer } = require ('telegraf')
const command = new Composer()
const text = require ('../const')


command.command('start', async (ctx) => {
	try {
		await ctx.reply(`
Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'Анон'}!
Я просто модератор
    `)
	} catch (e) {
		console.log(e)
	}
})

module.exports = command