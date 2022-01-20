module.exports = {
    name: "nick",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async({client, message, ...args}) => {
        /*if(arguments.length==4){
            message.member.setNickname(args[1])
        }
        else{
            message.reply("Sintaxis incorrecta, sintaxis correcta: w.nick <nombre>")
        }*/
        if(args[0]==undefined||args[1]!==undefined){
            message.reply("Sintaxis incorrecta, sintaxis correcta: w.nick <nombre>")
            console.log(args[0])
            console.log(args[1])
            console.log(args[2])
        }else{
            message.member.setNickname(args[0])
        }
        message.reply(message.author.username+" "+message.author.tag+" "+arguments.length)
    }
}