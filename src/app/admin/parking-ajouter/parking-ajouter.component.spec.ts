import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingAjouterComponent } from './parking-ajouter.component';

describe('ParkingAjouterComponent', () => {
  let component: ParkingAjouterComponent;
  let fixture: ComponentFixture<ParkingAjouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingAjouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
