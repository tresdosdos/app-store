import { ModalRoutingModule } from './modal-routing.module';

describe('ModalRoutingModule', () => {
  let modalRoutingModule: ModalRoutingModule;

  beforeEach(() => {
    modalRoutingModule = new ModalRoutingModule();
  });

  it('should create an instance', () => {
    expect(modalRoutingModule).toBeTruthy();
  });
});
