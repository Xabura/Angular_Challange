import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from 'src/app/services/cars.service';
import { Car } from 'src/app/shared/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];
  isLoading = false;

  constructor(private router: Router, private carsService: CarsService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.carsService.cars.subscribe((data) => {
      this.cars = data;
    });
    this.carsService.getCars().subscribe(() => (this.isLoading = false));
  }

  onAdd() {
    this.router.navigate(['cars/new']);
  }

  onDelete(id: string) {
    this.isLoading = true;
    this.carsService.delete(id).subscribe(() => (this.isLoading = false));
  }
}
