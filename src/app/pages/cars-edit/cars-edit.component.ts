import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CarsService } from 'src/app/services/cars.service';
import { CarClass } from 'src/app/shared/car-class';
import { Car } from 'src/app/shared/car.model';

@Component({
  selector: 'app-cars-edit',
  templateUrl: './cars-edit.component.html',
  styleUrls: ['./cars-edit.component.css'],
})
export class CarsEditComponent implements OnInit {
  url: string = '';
  car: any;

  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => (this.url = data['id']));

    this.carsService.getCar(this.url).subscribe((data) => {
      console.log(data);

      this.car = data;
    });
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
      .editCar(this.url, newCar)
      .subscribe(() => this.router.navigate(['/cars']));
  }
}
