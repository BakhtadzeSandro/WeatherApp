import { Component, Input } from '@angular/core';
import { Days } from '../../models/api.model';
@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent {
  @Input() weather?: Days;
}
