import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getWeatherData() 
  {
    // let url = "https://openweathermap.org/api​"
    let cityName = "Detroit"
    let apiKey = "d1ac8c6b1535a868488f4b3181162b11"

    let url = `https:/api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}​`
    return this.http.get(url)
  }
}
