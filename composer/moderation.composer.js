const { Composer } = require ('telegraf')
const moderation = new Composer()

const words = [
        "путин",
        "пшеки",
        "волынь",
        "хохол",
        "наша компания предлагает",
        "мы можем предложить вам",
        "предлагаю услуги",
        "зеленский",
        "спецоперация",
        "волынская резьня"
]

moderation.on('message', async (ctx) => {
        const wordList = words
        if(ctx.message.text) {
            const word = ctx.message.text.toLowerCase()
            try {
                for (let i = 0; i < wordList.length; i++) {
                    if(word.includes(words[i])) {
                        await ctx.deleteMessage()
                    }
                }
                } catch (e) {
                    if(e.response.description.includes('Bad Request: message to delete not found') === true) {
                        return console.log('окей, там несколько ключевых слов, я не упал')
                    }
                    console.log(e)
                }
            }
        })

module.exports = moderation