document.addEventListener('DOMContentLoaded', function() {
    const audioPlayers = document.querySelectorAll('.audio-player');

    audioPlayers.forEach(player => {
        player.addEventListener('play', function() {
            audioPlayers.forEach(otherPlayer => {
                if (otherPlayer !== player) {
                    otherPlayer.pause();
                }
            });
        });

        const figure = player.closest('.media-item');
        const audioSource = figure.dataset.src;
        player.src = audioSource;
    });
});
