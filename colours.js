const svg = document.getElementById('svg');
const [...blocks] = document.getElementById('colour_blocks').children;


const blendModes = [
  { "normal": .7 },
  { "multiply": .7 },
  { "overlay": .7 },
  { "lighten": .7 },
  { "color-burn": .7 },
  { "hard-light": .7 },
  { "soft-light": .7 },
  { "luminosity": .7 },
  { "difference": 1 }
]


blendModes.forEach((mbm, i) => {
  setTimeout(() => {
    blocks.forEach((block, i) => {
      const op = Object.values(mbm)[0];
      const key = Object.keys(mbm)[0];
      console.log(block.id, i, mbm, key, op);
      block.style.mixBlendMode = key;
      fadeBlock(block, op, i);
    });
  }, i * 1000);
});



function fadeBlock(block, op, i) {
  block.style.opacity = 0;
  setTimeout(() => {
    block.style.opacity = op;
    block.style.transition = "opacity 1s";
  }, i * 1000);
}