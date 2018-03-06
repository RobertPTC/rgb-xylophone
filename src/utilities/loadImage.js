window.RGB_XYLOPHONE_APP.loadImage = (function() {
  return function loadImage(imageUrl) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.addEventListener('load', (e) => {
        resolve(e);
      }, false);
      img.src = imageUrl;
    })
  }
})();
