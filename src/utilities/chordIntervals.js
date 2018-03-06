window.RGB_XYLOPHONE_APP.chordIntervals = (function() {
  return {
    setEsharpDiminished: (partials, rgb, time) => {
      partials[0].frequency.exponentialRampToValueAtTime(Math.ceil((rgb[0] / 255) * 342.88) || 1, time);
      partials[1].frequency.exponentialRampToValueAtTime(Math.ceil((rgb[1] / 255) * 407.75) || 1, time);
      partials[2].frequency.exponentialRampToValueAtTime(Math.ceil((rgb[2] / 255) * 484.90) || 1, time);
    },
    setFsharpMajor: (partials, rgb, time) => {
      partials[0].frequency.exponentialRampToValueAtTime(Math.ceil((rgb[0] / 255) * 272.14) || 1, time);
      partials[1].frequency.exponentialRampToValueAtTime(Math.ceil((rgb[1] / 255) * 363.27) || 1, time);
      partials[2].frequency.exponentialRampToValueAtTime(Math.ceil((rgb[2] / 255) * 484.90) || 1, time);
    },
    setBmajor: (partials, rgb, time) => {
      partials[0].frequency.exponentialRampToValueAtTime(Math.ceil((rgb[0] / 255) * 305.47) || 1, time);
      partials[1].frequency.exponentialRampToValueAtTime(Math.ceil((rgb[1] / 255) * 363.27) || 1, time);
      partials[2].frequency.exponentialRampToValueAtTime(Math.ceil((rgb[2] / 255) * 484.90) || 1, time);
    },
    setDsharpMinor: (partials, rgb, time) => {
      partials[0].frequency.exponentialRampToValueAtTime(Math.ceil((rgb[0] / 255) * 305.47) || 1, time);
      partials[1].frequency.exponentialRampToValueAtTime(Math.ceil((rgb[1] / 255) * 363.27) || 1, time);
      partials[2].frequency.exponentialRampToValueAtTime(Math.ceil((rgb[2] / 255) * 457.69) || 1, time);
    },
    setCsharpMajor(partials, rgb, time) {
      partials[0].frequency.exponentialRampToValueAtTime(Math.ceil((rgb[0] / 255) * 272.14) || 1, time);
      partials[1].frequency.exponentialRampToValueAtTime(Math.ceil((rgb[1] / 255) * 342.88) || 1, time);
      partials[2].frequency.exponentialRampToValueAtTime(Math.ceil((rgb[2] / 255) * 407.75) || 1, time);
    },
    setGsharpMinor(partials, rgb, time) {
      partials[0].frequency.exponentialRampToValueAtTime(Math.ceil((rgb[0] / 255) * 305.47) || 1, time);
      partials[1].frequency.exponentialRampToValueAtTime(Math.ceil((rgb[1] / 255) * 407.75) || 1, time);
      partials[2].frequency.exponentialRampToValueAtTime(Math.ceil((rgb[2] / 255) * 484.90) || 1, time);
    },
    setAsharpMinor(partials, rgb, time) {
      partials[0].frequency.exponentialRampToValueAtTime(Math.ceil((rgb[0] / 255) * 272.14) || 1, time);
      partials[1].frequency.exponentialRampToValueAtTime(Math.ceil((rgb[1] / 255) * 342.88) || 1, time);
      partials[2].frequency.exponentialRampToValueAtTime(Math.ceil((rgb[2] / 255) * 457.69) || 1, time);
    }
  }
})();
