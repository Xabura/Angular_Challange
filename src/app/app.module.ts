import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './pages/cars/cars.component';
import { NewCarComponent } from './pages/new-car/new-car.component';
import { CarsEditComponent } from './pages/cars-edit/cars-edit.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    NewCarComponent,
    CarsEditComponent,
    NotFoundComponent,
    LoadingSpinnerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
