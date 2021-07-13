// Create key
let createKey = (type, note, octave) => {
    let key = document.createElement('button')
    key.className = `piano__key piano__key--${type}`
    key.dataset.letterNote = type == 'white' ? note + octave : note + '#' + octave;
    key.dataset.letterNoteFileName = type == 'white' ? note + octave : note + 's' + octave;
    key.textContent = key.dataset.letterNote

    return key;

}