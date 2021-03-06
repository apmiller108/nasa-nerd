import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { API_URL } from '../../../environments/environment';

import { AsteroidsResponse } from '../models/asteroids-response.interface';

@Injectable()
export class AsteroidService {
  constructor(private http: Http) {}

  getAsteroids(): Observable<AsteroidsResponse> {
    return this.http
      .get(`${API_URL}/asteroids/near_earth_objects`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  getPage(page): Observable<AsteroidsResponse> {
    return this.http
      .get(`${API_URL}/asteroids/near_earth_objects?page=${page}&size=20`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  getAsteroid(asteroid_id) {
    return this.http
      .get(`${API_URL}/asteroids/near_earth_objects/${asteroid_id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  getNeoStats() {
    return this.http
      .get(`${API_URL}/asteroids/stats`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }
}
