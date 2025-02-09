window.addEventListener('keydown', function(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.play();
    key.classList.add('playing');
    this.setTimeout(function(){
        key.classList.remove('playing');
    }, 500)
})