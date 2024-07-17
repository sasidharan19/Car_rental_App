import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { 

  }

  apiUrl: string = 'https://freeapi.gerasim.in/api/CarRentalApp/';

  getAllCars() {
    return this.http.get(`${this.apiUrl}GetCars`);
  }

  createCar(obj: any) {
    return this.http.post(`${this.apiUrl}CreateNewCar`, obj);
  }

  updateCar(obj: any) {
    return this.http.put(`${this.apiUrl}UpdateCar`, obj);
  }

  deleteCar(carId: any) {
    return this.http.delete(`${this.apiUrl}DeleteCarbyCarId?carid= ${carId}`);
  }

  getAllBookings(){
    return this.http.get(`${this.apiUrl}geAllBookings`);
  }

  createBooking(obj: any){
    return this.http.post(`${this.apiUrl}CreateNewBooking`, obj);
  }
}
