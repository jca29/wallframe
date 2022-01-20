module.exports = {
    name: "nick",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async({client, message, args}) => {

        message.reply(message.author.username+" "+message.author.tag+" "+args)
    }
}