import Player from '@vimeo/player';

// console.log(Player);



const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
checkPlayTimeProgress();
player.play().then(function() {
    

player.on(timeupdate, onPlay);
})

function checkPlayTimeProgress() {
    localStorage.getItem('playProgress')
    if(progress)player.setCurrentTime(progress);
}