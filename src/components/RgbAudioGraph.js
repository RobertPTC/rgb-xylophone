window.RGB_XYLOPHONE_APP.RgbAudioGraph = (function() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const { generateChordIntervalAudio } = window.RGB_XYLOPHONE_APP;
  let currentAudioContext = null;
  return class RgbAudioGraph {
    constructor() {
      if (currentAudioContext) {
        currentAudioContext.close();
      }
      const audioContext = new AudioContext();
      currentAudioContext = audioContext;
      const masterGain = audioContext.createGain();
      const partialAmplitudes = [1,0.5,0.25];
      const oscillators = partialAmplitudes.map((partial) => (
         audioContext.createOscillator()
      ));
      const partialGains = partialAmplitudes.map((partial) => (
        audioContext.createGain()
      ));
      partialAmplitudes.forEach((amp, idx) => {
        partialGains[idx].gain.value = amp;
        oscillators[idx].connect(partialGains[idx]);
        partialGains[idx].connect(masterGain);
      });
      masterGain.gain.value = 0.5;
      this.masterGain = masterGain;
      this.oscillators = oscillators;
    }
    __highlightChordElemeent(currentElement, previousElement) {
      if (currentElement) {
        currentElement.classList.add('highlighted-chord');
      }
      if (previousElement) {
        previousElement.classList.remove('highlighted-chord');
      }
    }
    playChords(chords) {
      let currentTime = 0;
      let i = 0;
      let currentElement = null;
      let previousElement = null;
      chords.forEach((chord) => {
        generateChordIntervalAudio(this.oscillators, chord, currentAudioContext.currentTime + currentTime);
        currentTime += 1;
      });
      this.masterGain.connect(currentAudioContext.destination);
      this.oscillators.forEach((oscillator) => {
        oscillator.start(0);
        oscillator.stop(currentAudioContext.currentTime + currentTime);
      });
      if (chords.length) {
        currentElement = chords[i].element;
        this.__highlightChordElemeent(currentElement);
        const interval = setInterval(() => {
          i += 1;
          if (i > currentTime - 1) {
            clearInterval(interval);
            this.__highlightChordElemeent(null, currentElement);
            return;
          }
          previousElement = currentElement;
          currentElement = chords[i].element;
          this.__highlightChordElemeent(currentElement, previousElement);
        }, 1000);
      }
    }
    playChord(chord) {
      generateChordIntervalAudio(this.oscillators, chord, currentAudioContext.currentTime);
      this.masterGain.connect(currentAudioContext.destination);
      this.oscillators.forEach((oscillator) => {
        oscillator.start(0);
        oscillator.stop(currentAudioContext.currentTime + 1)
      });
    }
  }
})();
