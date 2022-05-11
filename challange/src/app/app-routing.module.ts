import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsEditComponent } from './pages/cars-edit/cars-edit.component';
import { CarsComponent } from './pages/cars/cars.component';
import { NewCarComponent } from './pages/new-car/new-car.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars', component: CarsComponent },
  { path: 'cars/new', component: NewCarComponent },
  { path: 'cars/edit/:id', component: CarsEditComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
