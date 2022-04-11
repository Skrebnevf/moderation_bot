const { Composer } = require ('telegraf')
const exeption = new Composer()

// Понимание того, что содержится в сообщении, возможно пригодится в будующем
exeption.on('video', async (ctx) => {
    if(ctx.update.message.message_id) {
        console.log('Видосик')
    }
})

exeption.on('photo', async (ctx) => {
    if (ctx.update.message.photo) {
        console.log('Была фоточка')
    }
})
exeption.on('sticker', async (ctx) => {
    if(ctx.update.update_id) {
        console.log('Был стикер')
    }
})


module.exports = exeption