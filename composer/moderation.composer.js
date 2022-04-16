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
        "binary",
        "trader",
        "forex",
        "trading",
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
        "join this channel",
        "𝐈 𝐬𝐭𝐚𝐫𝐭𝐞𝐝 𝐰𝐢𝐭𝐡",
        "with link",
        "invest with this company",
        "хочу поделиться сервисом",
        "в нашей компании вы можете",
        "хочешь заработать?", 
        "заинтересованным писать в лс",
        "наша фирма может предложить",
        "contact him this",
        "можем проконсультировать бесплатно",
        "мы являемся экспертами",
        "поможем вам сделать",
        "𝐣𝐨𝐢𝐧 𝐭𝐡𝐢𝐬 𝐜𝐡𝐚𝐧𝐧𝐞𝐥",
        "𝐈’𝐦 𝐬𝐨 𝐦𝐮𝐜𝐡 𝐡𝐚𝐩𝐩𝐲",
        "𝐜𝐨𝐧𝐭𝐚𝐜𝐭 𝐡𝐢𝐦",
        "от вас паспорт страны ЕС",
        "по регистрации провожу",
        "поможем вам оформить",
        "волынская резьня",
        "Нужны люди на регистрацию аккаунтов",
        "👇"
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