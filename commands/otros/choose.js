module.exports = {
    name: "choose",
    category: "otros",
    permissions: [],
    devOnly: false,
    run: async({client, message, ...args}) => {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        let i=0
        while(true){
            if(args[i]==undefined){
                break;
            }else{
                i++
            }
        }
        console.log("i es: "+i)
        if(i>=2){
            message.reply(args[getRandomInt(0,i-1)])
        }else{
            message.reply("Debes ingresar al menos 2 opciones")
        }
    }
}