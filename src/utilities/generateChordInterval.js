window.RGB_XYLOPHONE_APP.generateChordInterval = (function() {
  return function generateChordInterval(chord) {
    const allChordSelector = Math.ceil(Math.random() * 3);
    const binomialSelector = Math.random();
    if (allChordSelector === 1) {
      if (binomialSelector >= 0.5) {
        chord.chordInterval = 'ii';
      } else {
        chord.chordInterval = 'IV';
      }
    } else if (allChordSelector === 2) {
      if (binomialSelector >= 0.5) {
        chord.chordInterval = 'V';
      } else {
        chord.chordInterval = 'vii';
      }
    } else if (allChordSelector === 3) {
      chord.chordInterval = 'I';
    }
    return chord;
  }
})();
