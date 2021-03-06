import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCmpComponent } from './form-cmp.component';

describe('FormCmpComponent', () => {
  let component: FormCmpComponent;
  let fixture: ComponentFixture<FormCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
