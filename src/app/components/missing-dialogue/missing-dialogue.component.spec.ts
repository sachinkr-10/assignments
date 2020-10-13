import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingDialogueComponent } from './missing-dialogue.component';

describe('MissingDialogueComponent', () => {
  let component: MissingDialogueComponent;
  let fixture: ComponentFixture<MissingDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
