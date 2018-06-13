import { ModalWindowModule } from './modal-window.module';

describe('ModalWindowModule', () => {
  let modalWindowModule: ModalWindowModule;

  beforeEach(() => {
    modalWindowModule = new ModalWindowModule();
  });

  it('should create an instance', () => {
    expect(modalWindowModule).toBeTruthy();
  });
});
