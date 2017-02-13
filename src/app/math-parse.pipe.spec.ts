/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MathParsePipe } from './math-parse.pipe';
const mathjs = require('mathjs');
const MathNode = mathjs.MathNode;

describe('MathParsePipe', () => {
  it('create an instance', () => {
    const pipe = new MathParsePipe();
    expect(pipe).toBeTruthy();
  });
  it('returns MathExpression', () => {
    const pipe = new MathParsePipe();
    const result = pipe.transform('x^2');
    expect(result instanceof MathNode).toBeTruthy();
  });
});
