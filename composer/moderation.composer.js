const { Composer } = require ('telegraf')
const moderation = new Composer()
const keys = require('../const.js')

//Функция "отлова сообщения"
moderation.on('message', async (ctx) => {
        const keyWords = keys
        if(ctx.message.text) {
            const word = ctx.message.text.toLowerCase()
            try {
                //Цикл который берет длинну массива и пробегается по нему для поиска ключевого слова
                for (let i = 0; i < keyWords.length; i++) {
                    if(word.includes(keys[i])) {
                        await ctx.deleteMessage()
                    }
                }
                } catch (e) {
                    //Обработчик для более точного пониманя, что в сообщении было больше одного ключевого слова
                    if(e.response.description.includes('Bad Request: message to delete not found') === true) {
                        return console.log('окей, там несколько ключевых слов, я не упал')
                    }
                    console.log(e)        
                }
            }
        })

module.exports = moderation