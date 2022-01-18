const leaveImage = require("../util/leaveImage.js")

module.exports = {
    name: "memberLeave",
    run: async (bot, member) => {
        const leaveID="929496204969115699"
        const img = await leaveImage(member)
        member.guild.channels.cache.get(leaveID).send({
            content: "Lamentamos verte irte",
            files:[img]
        })
    }
}