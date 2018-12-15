import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyPlayButtonComponent } from './lobby-play-button.component';

describe('LobbyPlayButtonComponent', () => {
  let component: LobbyPlayButtonComponent;
  let fixture: ComponentFixture<LobbyPlayButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LobbyPlayButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbyPlayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
