const welcomeImage = require("../util/welcomeImage.js")

module.exports = {
    name: "memberWelcome",
    run: async (bot, member) => {
        const welcomeID="929496204969115699"
        const img = await welcomeImage(member)

        member.guild.channels.cache.get(welcomeID).send({
            content: `<@${member.id}> Bienvenido!`,
            files:[img]
        })
    }
}