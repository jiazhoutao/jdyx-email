import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JdyxMobileComponent } from './jdyx-mobile.component';

describe('JdyxMobileComponent', () => {
  let component: JdyxMobileComponent;
  let fixture: ComponentFixture<JdyxMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JdyxMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JdyxMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
