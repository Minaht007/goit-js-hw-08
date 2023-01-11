import Player from '@vimeo/player';

// console.log(Player);

const vimeoPlayer = document.querySelector('#vimeo-player');

const onPlay = function(data) {
    const play = vimeoPlayer.addEventListener(click, onAddLocal)
};

//  function onAddLocal(onPlay) {
//     onPlay.set
//  }

vimeoPlayer.on('play', onPlay);

{/* <iframe src="https://player.vimeo.com/video/76979871?h=8272103f6e" 
width="640" height="360" 
frameborder="0" 
allowfullscreen allow="autoplay; 
encrypted-media"></iframe>

<script src="https://player.vimeo.com/api/player.js"></script>
<script>
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
</script> */}

// player.pause().then(function() {
//     // the video was paused
// }).catch(function(error) {
//     switch (error.name) {
//         case 'PasswordError':
//             // the video is password-protected and the viewer needs to enter the
//             // password first
//             break;

//         case 'PrivacyError':
//             // the video is private
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });