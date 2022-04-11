const { Composer } = require ('telegraf')
const moderation = new Composer()

//Массив из ключевых слов на удаление
const words = [
        "путин",
        "мы приглашаем вас к взаимовыгодному сотрудничеству",
        "наша фирма может предложить",
        "пшеки",
        "волынь",
        "хохол",
        "наша компания предлагает",
        "мы можем предложить вам",
        "предлагаю услуги",
        "зеленский",
        "спецоперация",
        "условия сотрудничества",
        "требуемый опыт работы",
        "требования в кандидату",
        "требования к кандидатам",
        "волынская резьня"
]

//Функция "отлова сообщения"
moderation.on('message', async (ctx) => {
        const wordList = words
        if(ctx.message.text) {
            const word = ctx.message.text.toLowerCase()
            try {
                //Цикл который берет длинну массива и пробегается по нему для поиска ключевого слова
                for (let i = 0; i < wordList.length; i++) {
                    if(word.includes(words[i])) {
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