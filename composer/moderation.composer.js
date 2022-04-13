const { Composer } = require ('telegraf')
const moderation = new Composer()

//Массив из ключевых слов на удаление
const words = [
        "путин",
        "пшеки",
        "волынь",
        "хохол",
        "invest",
        "зеленский",
        "спецоперация",
        "наша компания предлагает",
        "мы можем предложить вам",
        "предлагаю услуги",
        "мы приглашаем вас к взаимовыгодному сотрудничеству",
        "условия сотрудничества",
        "требуемый опыт работы",
        "требования в кандидату",
        "требования к кандидатам",
        "cкам проект",
        "scam проект",
        "scam project",
        "invest with this company",
        "хочу поделиться сервисом",
        "в нашей компании вы можете",
        "хочешь заработать?", 
        "заинтересованным писать в лс",
        "наша фирма может предложить",
        "можем проконсультировать бесплатно",
        "мы являемся экспертами",
        "поможем вам сделать",
        "поможем вам оформить",
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