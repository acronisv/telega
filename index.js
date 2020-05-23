const TelegramBot = require('node-telegram-bot-api')
const config = require('./config')
const helper = require('./helper')

helper.logStart()

const bot = new TelegramBot(config.TOKEN, {
    polling: {
        interval: 300,
        autoStart: true,
        params:{
            timeout: 10
        }
    }
})

// bot.on('message', msg => {
//     const { id } = msg.chat
//     //bot.sendMessage(msg.chat.id, 'Привет, ' + msg.from.first_name +'! Ты наверное пришел за новыми знаниями в nail индустрии? Ты сделал(а) правильный выбор, держи карман шире!')

//     // if (msg.text.toLowerCase() === 'привет') {
//     //     bot.sendMessage(id, `Привет, ${msg.from.first_name}`)
//     // } else {
//     //     bot.sendMessage(id, debug(msg))
//     // }

//     // bot.sendMessage(id, debug(msg))
//     //     .then(()=> {
//     //         console.log('Message has been send')
//     //     })
//     //     .catch((error) => {
//     //         console.error(error)
//     //     })
// })

// bot.onText(/\/start/, msg => {
//     const { id } = msg.chat

//     bot.sendMessage(id, debug(msg))
// })

// bot.onText(/\/help (.+)/, (msg, [source, match]) => {
//     const { id } = msg.chat

//     bot.sendMessage(id, debug(match))
// })

// bot.on('message', msg => {
//     const chatId = msg.chat.id

//     if (msg.text === 'Закрыть'){
//         bot.sendMessage(chatId, 'Закрыть клавиатуру', {
//             reply_markup: {
//                 remove_keyboard: true
//             }
//         })
//     } else if (msg.text === 'Ответить') {
//         bot.sendMessage(chatId, 'Отвечаю', {
//             reply_markup: {
//                 force_reply: true
//             }
//         })
//     } else {
//         bot.sendMessage(chatId, 'Клавиатура', {
//             reply_markup: {
//                 keyboard: [
//                     [{
//                         text: 'Отправить местоположение',
//                         request_location: true
//                     }],
//                     ['Ответить', 'Закрыть'],
//                     ['333'],
//                     [{
//                         text: 'Отправить контакт',
//                         request_contact: true
//                     }]
//                 ]
//             }
//         })
//     }
    
// })

bot.on('message', msg => {
    console.log('Working', msg.from.first_name)
})

bot.onText(/\/start/, msg => {
    const text = `Здравствуйте, ${msg.from.first_name}\nДля начала работы набери команду /start`
    bot.sendMessage(msg.chat.id, text, {
        reply_markup: {
            //keyboard:
        }
    })
})