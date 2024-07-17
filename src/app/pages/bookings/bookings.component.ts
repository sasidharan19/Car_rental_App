import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})

export class BookingsComponent implements OnInit{
  bookingList: any[] = [];
  carList: any[] = [];

  ngOnInit(): void {
    this.getBookings();
    this.getAllCars();
  }

  carService = inject(CarService);

  bookingObj: any = {
    "CustomerName": "",
    "CustomerCity": "",
    "MobileNo": "",
    "Email": "",
    "BookingId": 0,
    "CarId": 0,
    "BookingDate": "2023-05-29T07: 38:32.98.7Z",
    "Discount": 0,
    "TotalBillAmount": 0
  }

  getBookings(){
    this.carService.getAllBookings().subscribe((result: any) =>{
      this.bookingList = result.data;
    }, (error) => {

    });
  }

  getAllCars(){
    this.carService.getAllCars().subscribe((result: any)=>{
      this.carList = result.data;
    }, (error) => {

    });
  }

  onSave(){
    this.carService.createBooking(this.bookingObj).subscribe((res: any)=> {
      if(res.result){
        alert("Booking created successfully");
        this.getBookings();
      } else {
        alert(res.message);
      }
    })
  }
}
