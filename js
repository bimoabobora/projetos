// a função faz o cronometro subir, começa na tecla enter e para na tecla espaço
// the function makes the counter go up, start on the key enter and stop on space key

// Variaveis referentes a DOM de alguns paragrafos, uma flag para inicio e parada e o contador de inicio.
// Some varibles refer to DOM of some paragraph, one flag to start and stop the counter and the counter
let diferencia_tempo = window.document.getElementById('diferencia')
let ultimo_tempo = window.document.getElementById('ultimo_tempo')
let cronometro = window.document.getElementById('cronometro')
let verificador = false
let ultimoTempo = null
let inicio = 0


// adiciona um EventListener que percebe quando alguma tecla do teclado for precionada
// Adds a EventListner thats know when a key is press down on a keyboard.

// essa parte começa o contador/cronometro
// this segment start the counter
document.addEventListener('keydown', 
function(iniciar){
    if(iniciar.key === 'Enter' && !verificador){
            verificador = true
            inicio = 0
            periodo = setInterval(()=> {
            guardar = inicio++
            cronometro.innerText = inicio
        }, 1000)
    }
// essa para o contador e salva o ultimo tempo
// this segment stop the counter and saves the information of the last time
    if(iniciar.key === ' '){
        clearInterval(periodo)
        verificador = false
        cronometro.innerText = inicio
        guardar = inicio
        ultimo_tempo.innerText = guardar 
    
    const tempoAtual = inicio
   
    
    if (ultimoTempo !== null && ultimoTempo >= tempoAtual){
        diferencia = Math.abs(ultimoTempo - tempoAtual)
        diferencia_tempo.innerText = diferencia + ' -'
        diferencia_tempo.style.color = 'green'
        }
    else {
        diferencia = Math.abs(ultimoTempo - tempoAtual)
        diferencia_tempo.innerText = diferencia + ' +'
        diferencia_tempo.style.color = 'red'
    }
    ultimoTempo = tempoAtual
    
    
}})
