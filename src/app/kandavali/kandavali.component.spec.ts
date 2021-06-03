import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KandavaliComponent } from './kandavali.component';

describe('KandavaliComponent', () => {
  let component: KandavaliComponent;
  let fixture: ComponentFixture<KandavaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KandavaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KandavaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
