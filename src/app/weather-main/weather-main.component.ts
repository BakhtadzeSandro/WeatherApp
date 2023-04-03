import { Component } from '@angular/core';
import { WeatherApiService } from '../services/weather-api.service';
import { Observable } from 'rxjs';
import { WeatherResult } from '../models/api.model';
import { CapitalCitiesService } from '../services/capital-cities.service';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.scss'],
})
export class WeatherMainComponent {
  constructor(
    private apiService: WeatherApiService,
    private capitalCitiesService: CapitalCitiesService
  ) {}

  cityName = 'Tbilisi';
  weather$: Observable<WeatherResult> | undefined;
  selectedCity = '';

  public getWeather(cityName: string) {
    this.weather$ = this.apiService.getWeather(cityName);
  }

  public listenToCityChanges() {
    this.weather$ = this.apiService.getWeather(this.selectedCity);
  }

  get capitalCities() {
    return this.capitalCitiesService.capitalCities;
  }

  ngOnInit() {
    this.getWeather(this.cityName);
  }
}
