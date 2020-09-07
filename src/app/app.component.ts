import { Component } from '@angular/core';
import {DataService} from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GrandCircusProject';
  constructor(private data:DataService) {
    this.data.getWeatherData().subscribe(data => {
      console.warn(data)
    })
  }
}
