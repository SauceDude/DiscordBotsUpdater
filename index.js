const axios = require('axios')
const Discord = require('discord.js');
const client = new Discord.Client()
const config = require('./config.json')

client.login(config.token)


client.on('ready', async () => {

    something = await axios.post(`https://discord.bots.gg/api/v1/bots/${client.user.id}/stats`, {
        guildCount: client.guilds.cache.size
    }, {
        headers: {Authorization: config.auth}
    });
    process.abort();

})