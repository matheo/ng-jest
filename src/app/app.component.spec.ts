import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory(AppComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });

  it(`should have as title 'ng-jest'`, () => {
    expect(spectator.component.title).toEqual('ng-jest');
  });

  it('should render title', () => {
    expect(spectator.query('.content span')).toHaveText('ng-jest app is running!');
  });
});
