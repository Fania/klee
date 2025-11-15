const svg = document.getElementById('svg');
const [...blocks] = document.getElementById('colour_blocks').children;


const blendModes = {
  "normal": .7,
  "multiply": .7,
  "overlay": .7,
  "lighten": .5,
  "hard-light": .7,
  "soft-light": .7,
  "luminosity": .7,
  "difference": 1
};


const key = Object.keys(blendModes);
const op = Object.values(blendModes);
const len = Object.keys(blendModes).length;


function nextBlendMode(c) {
  setMode(c);
  setTimeout( nextBlendMode, 20000, (c + 1) % len );
}

nextBlendMode(0);




function setMode(c) {
  blocks.forEach(block => {
    block.style.mixBlendMode = key[c];
    block.style.opacity = op[c];
  });
}

