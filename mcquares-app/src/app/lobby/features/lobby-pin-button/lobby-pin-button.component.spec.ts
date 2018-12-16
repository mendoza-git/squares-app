import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyPinButtonComponent } from './lobby-pin-button.component';

describe('LobbyPinButtonComponent', () => {
  let component: LobbyPinButtonComponent;
  let fixture: ComponentFixture<LobbyPinButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LobbyPinButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbyPinButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
