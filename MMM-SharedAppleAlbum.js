Module.register("MMM-SharedAppleAlbum", {
  // Default module config
  defaults: {
    updateInterval: 10 * 60 * 1000, // 10 minutes
    fadeSpeed: 4000
  },

  start() {
    Log.info("Starting module: " + this.name);
    this.imageIndex = 0;
    this.images = [
      // Temporary placeholder images (use public URLs)
      "https://via.placeholder.com/800x600?text=Image+1",
      "https://via.placeholder.com/800x600?text=Image+2",
      "https://via.placeholder.com/800x600?text=Image+3"
    ];

    // Start update loop
    this.scheduleUpdate();
  },

  getDom() {
    const wrapper = document.createElement("div");
    const image = document.createElement("img");
    image.src = this.images[this.imageIndex];
    image.style.maxWidth = "100%";
    image.style.maxHeight = "100%";
    wrapper.appendChild(image);
    return wrapper;
  },

  scheduleUpdate() {
    setInterval(() => {
      this.imageIndex = (this.imageIndex + 1) % this.images.length;
      this.updateDom(this.config.fadeSpeed);
    }, this.config.updateInterval);
  }
});