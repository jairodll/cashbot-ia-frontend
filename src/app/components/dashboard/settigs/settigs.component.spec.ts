import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettigsComponent } from './settigs.component';

describe('SettigsComponent', () => {
  let component: SettigsComponent;
  let fixture: ComponentFixture<SettigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettigsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
