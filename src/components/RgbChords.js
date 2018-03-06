window.RGB_XYLOPHONE_APP.RgbChords = (function() {
  const rgbChordsElement = document.getElementById('rgb-chords');
  const playButtonElement = document.getElementById('play-button');
  const { RgbAudioGraph } = window.RGB_XYLOPHONE_APP;
  return class RgbChords {
    constructor(chords) {
      this.chords = chords || [];
      this.rgbChordsElement = rgbChordsElement;
      this.playButtonElement = playButtonElement;
      this.__setEventListeners();
    }
    __setEventListeners() {
      this.playButtonElement.addEventListener('click', () => this.__playAllChords());
    }
    __playAllChords() {
      new RgbAudioGraph().playChords(this.chords);
    }
    __clearRgbChordsEl() {
      this.rgbChordsElement.innerHTML = '';
    }
    __setChordElementClass(chordElement) {
      chordElement.classList.add('chord');
    }
    __setChordElementStyle(chordElement, rgb) {
      chordElement.setAttribute('style', `background: rgb(${rgb});`);
    }
    __appendElement(parent, child) {
      parent.append(child);
    }
    addChord(chord) {
      this.chords.push(chord);
      return this;
    }
    render() {
      this.__clearRgbChordsEl();
      this.chords.forEach((chord) => {
        const chordElement = document.createElement('div');
        this.__setChordElementStyle(chordElement, chord.rgb.join(','));
        this.__setChordElementClass(chordElement);
        chord.element = chordElement;
        this.__appendElement(rgbChordsElement, chordElement);
      });
    }
  }
})();
