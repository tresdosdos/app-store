import { CategoriesRoutingModule } from './categories-routing.module';

describe('CategoriesRoutingModule', () => {
  let categoriesRoutingModule: CategoriesRoutingModule;

  beforeEach(() => {
    categoriesRoutingModule = new CategoriesRoutingModule();
  });

  it('should create an instance', () => {
    expect(categoriesRoutingModule).toBeTruthy();
  });
});
