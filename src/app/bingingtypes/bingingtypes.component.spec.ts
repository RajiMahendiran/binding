import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingingtypesComponent } from './bingingtypes.component';

describe('BingingtypesComponent', () => {
  let component: BingingtypesComponent;
  let fixture: ComponentFixture<BingingtypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingingtypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BingingtypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
