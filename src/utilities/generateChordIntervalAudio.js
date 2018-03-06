window.RGB_XYLOPHONE_APP.generateChordIntervalAudio = (function() {
  const { chordIntervals } = window.RGB_XYLOPHONE_APP;
  return function(partials, chord, time) {
    const { chordInterval, rgb } = chord;
    switch (chordInterval) {
      case 'I':
        chordIntervals.setFsharpMajor(partials, rgb, time);
        break;
      case 'vi':
        chordIntervals.setDsharpMinor(partials, rgb, time);
        break;
      case 'IV':
        chordIntervals.setBmajor(partials, rgb, time);
        break;
      case 'V':
        chordIntervals.setCsharpMajor(partials, rgb, time);
        break;
      case 'ii':
        chordIntervals.setGsharpMinor(partials, rgb, time);
        break;
      case 'iii':
        chordIntervals.setAsharpMinor(partials, rgb, time);
        break;
      case 'vii':
        chordIntervals.setEsharpDiminished(partials, rgb, time);
        break;
      default:
        break;
    }
  }
})();
