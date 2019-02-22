import { ProductImageUrlPipe } from './product-image-url.pipe';

describe('ProductImageUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductImageUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
