module.exports = {
    name: "reload",
    category: "admin",
    permissions: [],
    devOnly: true,
    run: async({bot, message, args}) => {
        const {client} = bot
        message.delete(1000);

        client.loadEvents(bot, true)
        client.loadCommands(bot, true)

        message.reply("Done")
    }
}