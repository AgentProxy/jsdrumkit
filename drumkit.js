var handlers = {
    playSound: function(event){
        event.preventDefault();
        const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
        const keys = document.querySelectorAll('.key');
        keys.forEach(key =>key.addEventListener('transitionend', function(event){
            if(event.propertyName !== 'transform'){
                return
            }
            key.classList.remove('playing');
            console.log(event.propertyName);
        }));
        if(!audio){
            return;
        }
        key.classList.add("playing");
        audio.currentTime = 0;
        audio.play();
    }
}

var views = {
     setupEventListener: function (){
         window.addEventListener('keydown', handlers.playSound);
     },
}

views.setupEventListener();