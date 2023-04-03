/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CapitalCitiesService } from './capital-cities.service';

describe('Service: CapitalCities', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CapitalCitiesService]
    });
  });

  it('should ...', inject([CapitalCitiesService], (service: CapitalCitiesService) => {
    expect(service).toBeTruthy();
  }));
});
