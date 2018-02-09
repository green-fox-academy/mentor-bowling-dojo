'use strict';

export function scoreFromFrames(frames: number[][]) : number {
  const strike = {
    is: frame => frame.indexOf(10) !== -1,
    getScore: nextFrame => sum.apply(null, nextFrame)
  };
  const spare = {
    is: frame => sum.apply(null, frame) === 10 && !strike.is(frame),
    getScore: nextFrame => nextFrame[0]
  };

  return frames
    .map(addBonus(strike))
    .map(addBonus(spare))
    .map((frame) => frame.reduce(sum))
    .reduce(sum);
}

function addBonus({is, getScore}) {
   return (frame, i, frames) =>
     is(frame) ?
       [...frame, getScore(frames[i + 1])] :
       frame;
}

function sum(a: number, b: number) : number {
  return a + b;
}
