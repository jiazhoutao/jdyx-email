import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JdyxPasswordComponent } from './jdyx-password.component';

describe('JdyxPasswordComponent', () => {
  let component: JdyxPasswordComponent;
  let fixture: ComponentFixture<JdyxPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JdyxPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JdyxPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
