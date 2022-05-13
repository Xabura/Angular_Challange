import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from 'src/app/services/cars.service';
import { CarClass } from 'src/app/shared/car-class';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css'],
})
export class NewCarComponent implements OnInit {
  constructor(private carsService: CarsService, private router: Router) {}

  ngOnInit(): void {
    this.carsService.getId();
  }

  onSubmit(values: any) {
    const newCar = new CarClass(
      'car' + this.carsService.getId(),
      values.model,
      values.img,
      values.description,
      {
        abs: values.abs,
        'electric-glass': values.window,
        hatch: values.hatch,
        bluetooth: values.bluetooth,
        alarm: values.alarm,
        parking: values.parking,
        navigation: values.navigation,
        computer: values.computer,
        wheel: values.wheel,
      }
    );

    this.carsService
      .addCar(newCar)
      .subscribe(() => this.router.navigate(['/cars']));
  }
}
