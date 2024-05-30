const dataEvent = new Date("Dec 12, 2024 19:00:00")
const timeStampEvent = dataEvent.getTime()

const contador = setInterval(()=>{
    const dataAtual = new Date()
    const timeStampAtual = dataAtual.getTime()

    const diferencaEvento = timeStampEvent - timeStampAtual

    const dias = Math.floor(diferencaEvento / (1000 * 60 * 60 *24))
    const horas = Math.floor((diferencaEvento % (1000 * 60 * 60*24)) / (1000 * 60 * 60))
    const minutos = Math.floor(diferencaEvento % (1000 * 60 * 60) / (1000*60))
    const segundos = Math.floor(diferencaEvento % (1000 * 60) / 1000)
    
    
    document.getElementById("contador").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`

    if(diferencaEvento < 0){
        clearInterval(contador)
        document.getElementById("contador").innerHTML = `Evento expirado!`
    }
}, 1000)