import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = "51bee09a9fa071f14f3b9599c16f7537";
  constructor(private http : HttpClient) { 
    
  }

  getCityWeather(city : string) : Observable<any>{
    let url = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey;
    return this.http.get("https://" +url);
  }
}
