const Discord = require("discord.js")
require("dotenv").config()

const welcomeImage = require("./util/welcomeImage")
const leaveImage = require("./util/leaveImage")


const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

let bot = {
    client,
    prefix: "w.",
    owners: "592470637310771386"
}

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot,reload) => require("./handlers/commands")(bot,reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot


/*client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if(message.content.substring(0,1)=="%"){
        if(message.content.indexOf(" ")==-1){
            if(message.content.substring(1,message.content.length)=="hi"){
                message.reply("hola! :c")
            }else if(message.content.substring(1,message.content.length)=="myid"){
                message.reply(`Hola <@${message.author.id}>, tu id es: ${message.author.id}`)
            }else{
                message.author.guild.channels.cache.get(message.channelId+"").send("No conozco ese comando")
            }
        }else{
            if(message.content.substring(1, message.content.indexOf(" "))=="delete"){
                
            }
            else{
                message.guild.channels.cache.get(message.channelId+"").send("No conozco ese comando")
            }
        }
    }
})

const welcomeID="929597272625381396"
const leaveID="931318890066247720"

client.on("guildMemberAdd", async (member) => {
    const img = await welcomeImage(member)
    member.guild.channels.cache.get(welcomeID).send({
        content: `<@${member.id}> Bienvenido!`,
        files:[img]
    })
})

client.on("guildMemberRemove", async (member) => {
    const img = await leaveImage(member)
    member.guild.channels.cache.get(leaveID).send({
        content: "Lamentamos verte irte",
        files:[img]
    })
})*/

client.login(process.env.TOKEN)