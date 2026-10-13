console.log('diceduel')
//'⚀', '⚁', '⚂', '⚃', '⚄', '⚅'
const dice_values = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']
const score = [0, 0]
const current_dices = [0, 0]
const history = document.querySelector('.history')
const button = document.querySelector('.roll-button')

function play_game(){
    console.log('eeeeee')
    let min = 0;
    let class_history = ''
    current_dices[0] = Math.floor(Math.random() * ((dice_values.length - 1) - min + 1)) + min;
    current_dices[1] = Math.floor(Math.random() * (dice_values.length - 1));
    
    if(current_dices[0] > current_dices[1]){
        score[0]++
        class_history = 'history-green'
    } else if(current_dices[0] < current_dices[1]){
        score[1]++
        class_history = 'history-red'
    } else{
        class_history = 'history-gray'
    }

    console.log(current_dices[0])
    console.log(current_dices[1])
    const dices_blocks = document.querySelectorAll('.dice')
    dices_blocks.forEach((element, i) => {
        element.innerText = dice_values[current_dices[i]]
    })

    const score_blocks = document.querySelectorAll('.score')
    score_blocks.forEach((element, i) => {
        element.innerText = score[i]
    })

    const history_item = document.createElement('div')
    history_item.classList.add('history-item')
    history_item.classList.add(class_history)
    history_item.innerText = (current_dices[0] + 1) + ' - ' + (current_dices[1] + 1)

    history.prepend(history_item)
    const history_blocks = document.querySelectorAll('.history-item')
    history_blocks.forEach((element, i) => {
        if (i >= 3){
            element.remove()
        }
    })
}

button.addEventListener('click', play_game)