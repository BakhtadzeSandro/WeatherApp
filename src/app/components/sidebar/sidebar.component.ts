import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResult } from 'src/app/models/api.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() weatherResult$?: Observable<WeatherResult>;

  ngOnInit() {
    this.weatherResult$?.subscribe(console.log);
  }
}
