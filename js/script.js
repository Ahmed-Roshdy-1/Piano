let keyboard = document.querySelector('.piano__keyboard')
let pianoNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

// initial function 
let init = () => {
    for (let i = 1; i <= 5; i++) {
        for (let j = 0; j < 7; j++) {
            let key = createKey('white', pianoNotes[j], i)
            keyboard.appendChild(key);

            if (j != 2 && j != 6) {
                key = createKey('black', pianoNotes[j], i)
                let emptySpace = document.createElement('div')
                emptySpace.className = 'empty-space'
                emptySpace.appendChild(key)
                keyboard.appendChild(emptySpace)
            }

        }
    }
}



// Create key
let createKey = (type, note, octave) => {
    let key = document.createElement('button')
    key.className = `piano__key piano__key--${type}`
    key.dataset.letterNote = type == 'white' ? note + octave : note + '#' + octave;
    key.dataset.letterNoteFileName = type == 'white' ? note + octave : note + 's' + octave;
    key.textContent = key.dataset.letterNote

    key.addEventListener('mousedown', () => {
        playSound(key);
        key.classList.add('piano__key--playing')
    })
    key.addEventListener('mouseup', () => {
        key.classList.remove('piano__key--playing')
    })
    key.addEventListener('mouseleave', () => {
        key.classList.remove('piano__key--playing')
    })

    return key;

}

// adding sounds
let playSound = (key) => {
    let audio = document.createElement('audio');
    audio.src = 'sounds/' + key.dataset.letterNoteFileName + '.mp3'
    audio.play().then(() => audio.remove())
}

init();