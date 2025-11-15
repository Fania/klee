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

let c = 0;
function loopModes(c) {

  for (const bm in blendModes) {
    // console.log(bm,blendModes[bm]);
    setTimeout(() => {
      blocks.forEach(block => {
        console.log(block.id, bm, blendModes[bm], c);
        block.style.mixBlendMode = bm;
        fadeBlock(block, blendModes[bm], c);
      });
      // c++;
    }, c * 5000);
    if(c==7) {
      console.log('inside if');
      c=0;
    } else {
      console.log('inside else');
      c++;
    }
    console.log(c);
    // loopModes(c);
  }

}

loopModes(c);




// let c = 0;
// blendModes.forEach((mbm, i) => {
  // setTimeout(() => {
    // console.log(mbm);
    // blocks.forEach((block, j) => {
      // const op = Object.values(mbm)[0];
      // const key = Object.keys(mbm)[0];
      // console.log(block.id, i, j, mbm, c);
      // block.style.mixBlendMode = key;
      // fadeBlock(block, op, c);
    // });
    // c==7 ? c=0: c++;
  // }, i * 20000);
// });






function fadeBlock(block, op, i) {
  block.style.opacity = 0;
  setTimeout(() => {
    block.style.opacity = op;
    block.style.transition = "opacity .25s";
  }, i * 200);
}


