const { Jimp } = require('jimp');

async function cropLogo() {
  try {
    const image = await Jimp.read('src/assets/logo.png');
    console.log(`Original Size: ${image.bitmap.width}x${image.bitmap.height}`);
    
    // The "A" is the leftmost letter. We'll crop a square from the left side.
    // Assuming the logo is centered, we might need to find the bounding box first.
    // Let's just crop the left side and hope it gets the A. Or better, we can scan for non-transparent pixels.
    let minX = image.bitmap.width;
    let minY = image.bitmap.height;
    let maxX = 0;
    let maxY = 0;

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const alpha = this.bitmap.data[idx + 3];
      if (alpha > 10) { // Not fully transparent
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    });

    console.log(`Content bounding box: minX=${minX}, maxX=${maxX}, minY=${minY}, maxY=${maxY}`);

    // Since the "A" is the first letter, it should be on the left of the bounding box.
    // We assume the "A" width is about roughly proportional to its height, maybe slightly wider because of the swoosh.
    const height = maxY - minY;
    // We'll crop a square from minX
    const width = height * 1.2; // Guessing the A is a bit wider than tall due to swoosh

    const cropped = image.crop({ x: minX, y: minY, w: width, h: height });
    
    await cropped.write('public/favicon.png');
    console.log('Successfully cropped and saved to public/favicon.png');
  } catch (err) {
    console.error(err);
  }
}

cropLogo();
