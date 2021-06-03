import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndheriComponent } from './andheri.component';

describe('AndheriComponent', () => {
  let component: AndheriComponent;
  let fixture: ComponentFixture<AndheriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndheriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndheriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
