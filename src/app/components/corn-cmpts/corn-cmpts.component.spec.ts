import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CornCmptsComponent } from './corn-cmpts.component';

describe('CornCmptsComponent', () => {
  let component: CornCmptsComponent;
  let fixture: ComponentFixture<CornCmptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CornCmptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CornCmptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
