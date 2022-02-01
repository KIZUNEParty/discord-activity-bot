import dsc, { Intents } from 'discord.js'
import denv from 'dotenv'

denv.config()

let cli = new dsc.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

// cli.on('messageCreate', (message) => {
//     if (message.content === 'ping') {
//         message.reply({
//             content: 'pong',
//         })
//     }
// })

cli.on('ready', () => {
    console.log('Your Bot is now READY!')

    const gID = '727389255139328143'
    let guild = cli.guilds.cache.get(gID)

    let commands

    if (guild) {
        commands = guild.commands
    } else {
        commands = cli.application?.commands
    }

    commands?.create({
        name: 'ping',
        description: 'reply with pong',
    })

    commands?.create({
        name: 'act',
        description: 'starting activity'
    })
})

cli.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
        return
    }

    let {commandName, options} = interaction

    if (commandName === 'ping') {
        interaction.reply({
            content: `pong | ${cli.ws.ping} ms`,
            // ephemeral: true,
        })
    } else if (commandName === 'act') {
        
    }
})

cli.login(process.env.TOKEN)