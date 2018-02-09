'use strict';

import {test} from 'tape';
import {scoreFromFrames} from './bowling';

function fillZerosFrames(count) {
  return Array.from({length: count}, () => [0, 0]);
}

test('Single frame sum', t => {
  t.equal(scoreFromFrames([[0, 0], ...fillZerosFrames(9)]), 0);
  t.equal(scoreFromFrames([[1, 0], ...fillZerosFrames(9)]), 1);
  t.equal(scoreFromFrames([[1, 1], ...fillZerosFrames(9)]), 2);
  t.equal(scoreFromFrames([[1, 2], ...fillZerosFrames(9)]), 3);
  t.end();
});

test('Sum simple frames', t => {
  t.equal(scoreFromFrames([[0, 0], ...fillZerosFrames(8), [0, 1]]), 1);
  t.end();
});

test('Sum of frames with spare', t => {
  t.equal(scoreFromFrames([[5, 5], [1, 0], ...fillZerosFrames(8)]), 12);
  t.equal(scoreFromFrames([[5, 5], [2, 0], ...fillZerosFrames(8)]), 14);
  t.end();
});

test('Sum of frames with strike', t => {
  t.equal(scoreFromFrames([[10, 0], [1, 1], ...fillZerosFrames(8)]), 14);
  t.end();
});
