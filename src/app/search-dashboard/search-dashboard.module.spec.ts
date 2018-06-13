import { SearchDashboardModule } from './search-dashboard.module';

describe('SearchDashboardModule', () => {
  let searchDashboardModule: SearchDashboardModule;

  beforeEach(() => {
    searchDashboardModule = new SearchDashboardModule();
  });

  it('should create an instance', () => {
    expect(searchDashboardModule).toBeTruthy();
  });
});
