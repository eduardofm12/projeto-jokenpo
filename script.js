const result = document.querySelector('.resultado')
const humanSocre = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber =0




const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['pedra', 'papel', 'tesoura']
    const randomNumeber = Math.floor(Math.random() * 3)
    return choices[randomNumeber]

}

const playTheGame = (human, machine) => {
    console.log('humano: ' + human + "maquina:" + machine)
    if (human === machine) {
        result.innerHTML = "Deu empate"
    } else if (human === 'papel' && machine === 'pedra' ||
        human === 'pedra' && machine === 'tesoura' ||
        human === 'tesoura' && machine === 'papel')
         {
            humanScoreNumber++
           humanSocre.innerHTML = humanScoreNumber
        result.innerHTML = "Você Ganhou!"

    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = " Você perdeu!"
    }


}
