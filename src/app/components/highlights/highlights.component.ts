import { Component, Input } from '@angular/core';
import { WeatherResult } from 'src/app/models/api.model';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss'],
})
export class HighlightsComponent {
  @Input() weatherResult?: WeatherResult;
}
