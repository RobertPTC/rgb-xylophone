window.RGB_XYLOPHONE_APP.calculateAspectRatioFit = (function() {
  return function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
    const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
    return { width: Math.floor(srcWidth*ratio), height: Math.floor(srcHeight*ratio) };
  }
})();
