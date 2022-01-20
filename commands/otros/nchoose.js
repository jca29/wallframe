module.exports = {
    name: "nchoose",
    category: "otros",
    permissions: [],
    devOnly: false,
    run: async({client, message, ...args}) => {
        let opciones = []
        let i=0
        while(true){
            if(args[i]==undefined){
                break;
            }else{
                opciones[i]=args[i]
                i++
            }
        }
        if(opciones.length>=2){
            message.reply(pickRandom(opciones))
        }else{
            message.reply("Debes ingresar al menos 2 opciones")
        }

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function pickRandom(opciones) {
            let mensaje=""
            let k=1
            while(opciones.length!=0){
                let opcion = getRandomInt(1,opciones.length)
                mensaje=mensaje+`${k}. ${opciones[opcion-1]}`+"\n"
                k++
                opciones.splice(opcion-1,1)
            }
            return mensaje
        }
    }
}