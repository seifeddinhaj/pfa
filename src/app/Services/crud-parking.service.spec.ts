import { TestBed } from '@angular/core/testing';

import { CrudParkingService } from './crud-parking.service';

describe('CrudParkingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudParkingService = TestBed.get(CrudParkingService);
    expect(service).toBeTruthy();
  });
});
