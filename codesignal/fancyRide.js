const cars = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];

function fancyRide(l, fares) {
  const total = [];
  let sum = 0;
  for(let i = 0; i < fares.length; i++) {
    total.push(fares[i] * l);
  }
  for(let j = 0; j < total.length; j++) {
    if(total[j] > 20) {
      break;
    }
    sum = total[j]
  }
  sum /= l;
  const type = fares.indexOf(sum);
  return cars[type];
}

const l = 30;
const fares = [0.3, 0.5, 0.7, 1, 1.3];

fancyRide(l, fares);
