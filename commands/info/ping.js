module.exports = {
    name: "ping",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async({client, message, args}) => {
        let tiempo = new Date()
        let ping= tiempo - message.createdTimestamp

        message.reply("pong, el ping del bot es: "+ping+"ms")
    }
}