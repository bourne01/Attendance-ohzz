import { ToCnNumberPipe } from './to-cn-number.pipe';

describe('ToCnNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new ToCnNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
