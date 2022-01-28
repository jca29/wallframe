const Discord = require("discord.js")

module.exports = {
    name: "stats",
    category: "otros",
    permissions: [],
    devOnly: false,
    run: async({client, message, ...args}) => {

        const prueba = new Discord.MessageEmbed()
        console.log(message.author.displayAvatarURL())
        const imagen = new Discord.MessageAttachment(`${message.author.displayAvatarURL()}`)
        prueba.setColor("#C1FA70")
        prueba.setAuthor({name: message.author.tag, iconURL: message.author.displayAvatarURL(), url: 'https://youtube.com'})
        prueba.setDescription("hola")
        prueba.setImage()
        message.channel.send({ embeds: [prueba], files: [imagen]})
    }
}