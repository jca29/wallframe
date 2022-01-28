module.exports = {
    name: "help",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async({client, message, ...args}) => {
        message.member.send("prueba")
    }
}