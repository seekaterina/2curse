console.log('diceduel')
//'⚀', '⚁', '⚂', '⚃', '⚄', '⚅'
const dice_values = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']
const score = [0, 0]

function play_game(){
    console.log('eeeeee')
    let min = 0;
    let player_value = Math.floor(Math.random() * (dice_values.length - min + 1)) + min;
    let computer_value = Math.floor(Math.random() * dice_values.length);
}

let button = document.querySelector('.roll-button')
button.addEventListener('click', play_game)