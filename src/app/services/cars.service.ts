import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { Car } from '../shared/car.model';

@Injectable({ providedIn: 'root' })
export class CarsService {
  cars = new Subject<Car[]>();
  carId = 0;

  constructor(private http: HttpClient) {}

  getId() {
    this.getCars().subscribe((data) => {
      this.carId = data.length + 1;
    });
    return this.carId;
  }

  getCars() {
    return this.http.get<Car[]>('http://localhost:3000/cars').pipe(
      tap((data) => {
        this.cars.next(data);
      })
    );
  }

  getCar(url: string) {
    return this.http.get<Car[]>('http://localhost:3000/cars/' + url);
  }

  delete(id: string) {
    return this.http
      .delete('http://localhost:3000/cars/' + id)
      .pipe(tap(() => this.getCars().subscribe()));
  }

  addCar(car: Car) {
    return this.http.post('http://localhost:3000/cars', car);
  }

  editCar(url: string, car: Car) {
    return this.http.put<Car>('http://localhost:3000/cars/' + url, car);
  }
}
