import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResult } from '../models/api.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  constructor(private http: HttpClient) {}

  // Get weather for a specific city.
  getWeather(cityName: string): Observable<WeatherResult> {
    return this.http.get<WeatherResult>(
      `${environment.apiBase + cityName}&days=5&hour=0`
    );
  }
}
