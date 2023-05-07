import { TestBed } from '@angular/core/testing';

import { MisActividadesService } from './mis-actividades.service';

describe('MisActividadesService', () => {
  let service: MisActividadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisActividadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
