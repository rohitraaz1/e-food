import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandraComponent } from './bandra.component';

describe('BandraComponent', () => {
  let component: BandraComponent;
  let fixture: ComponentFixture<BandraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
