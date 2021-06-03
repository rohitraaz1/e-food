import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorivaliComponent } from './borivali.component';

describe('BorivaliComponent', () => {
  let component: BorivaliComponent;
  let fixture: ComponentFixture<BorivaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorivaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorivaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
