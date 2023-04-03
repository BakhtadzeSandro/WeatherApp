import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherMainComponent } from './weather-main/weather-main.component';

import {
  NbIconModule,
  NbLayoutModule,
  NbSidebarModule,
  NbThemeModule,
  NbSelectModule,
} from '@nebular/theme';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WeatherMainComponent,
    SidebarComponent,
    WeatherCardComponent,
    HighlightsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NbLayoutModule,
    NbSidebarModule,
    NbThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbIconModule,
    NbEvaIconsModule,
    NbSelectModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
