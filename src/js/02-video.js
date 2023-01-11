import Player from '@vimeo/player';

// console.log(Player);



const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.ready().then(function() {
    checkPlayTimeProgress();
    player.on('timeupdate',function(e) {
        localStorage.setItem('playTimeProgress', e.seconds)
    });
})

function checkPlayTimeProgress() {
    const progress = localStorage.getItem('playTimeProgress')
    if(progress)player.setCurrentTime(progress);
}