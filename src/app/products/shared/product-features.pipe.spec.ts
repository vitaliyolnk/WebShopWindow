import { ProductFeaturesPipe } from './product-features.pipe';

describe('ProductTechDataPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductFeaturesPipe();
    expect(pipe).toBeTruthy();
  });
});
