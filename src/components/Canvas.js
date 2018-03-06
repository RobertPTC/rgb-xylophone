window.RGB_XYLOPHONE_APP.Canvas = (function() {
  const {
    loadImage,
    calculateAspectRatioFit,
    CONSTANTS,
    playSingleChord,
    RgbChords,
    RgbAudioGraph,
    generateChordInterval
  } = window.RGB_XYLOPHONE_APP;
  const canvasElement = document.getElementById('canvas');
  const canvasContainerElemenet = document.getElementById('canvas-container');
  const canvasCtx = canvasElement.getContext('2d');
  const { CONTAINER_MARGIN } = CONSTANTS;
  const rgbChords = new RgbChords();
  return class Canvas {
    constructor() {
      this.canvasElement = canvasElement;
      loadImage('../assets/xylophone.jpg').then((e) => {
        const canvasContainerDimensions = canvasContainerElemenet.getBoundingClientRect();
        const canvasContainerWidth = canvasContainerDimensions.width > 500 ? 500 : canvasContainerDimensions.width;
        const imgSrcElement = e.srcElement;
        const aspectRatioFit = calculateAspectRatioFit(imgSrcElement.naturalWidth, imgSrcElement.naturalHeight, canvasContainerWidth, canvasContainerWidth);
        this.__setCanvasElementDimensions(canvasElement, aspectRatioFit.width - 10, aspectRatioFit.height);
        this.__setCanvasContainerStyle(canvasContainerElemenet, canvasContainerWidth);
        canvasCtx.drawImage(e.target, 5, 5, aspectRatioFit.width - 20, aspectRatioFit.height);
      }).catch((e) => {
        console.error('Error loading image ', e);
      });
      this.__setEventListeners();
    }
    __setEventListeners() {
      this.canvasElement.addEventListener('click', (e) => this.getPixelRGB(e, canvasCtx));
    }
    __setCanvasElementDimensions(el, width, height) {
      el.width = width;
      el.height = height;
    }
    __setCanvasContainerStyle(element, canvasContainerWidth) {
      element.setAttribute('style', `width: ${canvasContainerWidth}px; margin: auto;`);
    }
    getPixelRGB(event, canvasCtx) {
      const x = event.layerX;
      const y = event.layerY;
      const pixel = canvasCtx.getImageData(x, y, 1, 1);
      const data = pixel.data;
      let rgb = data.slice(0, 3);
      if (rgb[0] < 100 && rgb[1] < 100 && rgb[2] < 100) {
        rgb = [100, 100, 100];
      }
      const chord = generateChordInterval({ rgb });
      rgbChords.addChord(chord).render();
      new RgbAudioGraph().playChord(chord);
    }
  }
})();
