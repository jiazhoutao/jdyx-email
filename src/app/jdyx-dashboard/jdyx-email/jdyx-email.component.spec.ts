import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JdyxEmailComponent } from './jdyx-email.component';

describe('JdyxEmailComponent', () => {
  let component: JdyxEmailComponent;
  let fixture: ComponentFixture<JdyxEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JdyxEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JdyxEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
