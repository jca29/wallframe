module.exports = {
    name: "nick",
    category: "otros",
    permissions: [],
    devOnly: false,
    run: async({client, message, ...args}) => {
        if(args[0]==undefined||args[1]!==undefined){
            message.reply("Sintaxis incorrecta, sintaxis correcta: w.nick <nombre>")
        }else{
            message.member.setNickname(args[0])
        }
    }
}