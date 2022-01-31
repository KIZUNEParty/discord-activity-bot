const { Client, Intents } = require('discord.js')
const { token } = require('./components/config.json')

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.once('ready', () => {
	console.log('System is now Ready!')
})

client.login(token)