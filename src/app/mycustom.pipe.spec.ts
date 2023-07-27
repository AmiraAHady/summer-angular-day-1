import { MycustomPipe } from './mycustom.pipe';

describe('MycustomPipe', () => {
  it('create an instance', () => {
    const pipe = new MycustomPipe();
    expect(pipe).toBeTruthy();
  });
});
