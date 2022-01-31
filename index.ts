import dsc, { Intents } from 'discord.js'
import denv from 'dotenv'

denv.config()

let cli = new dsc.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

cli.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply({
            content: 'pong',
        })
    }
})

cli.on('ready', () => {
    console.log('Your Bot is now READY!')
})

cli.login(process.env.TOKEN)