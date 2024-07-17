import { Component, OnInit, inject } from '@angular/core';
import { CarService } from '../../services/car.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit{

  ngOnInit(): void {
    this.getCars();
  }

  carService = inject(CarService);

  carList: any[] = [];

  getCars(){
    this.carService.getAllCars().subscribe((result: any) => {
      this.carList = result.data;
    }, error =>{
    })
  }

  carForm: FormGroup = new FormGroup({
    carId: new FormControl(0),
    brand: new FormControl(""),
    model: new FormControl(""),
    year: new FormControl(""),
    color: new FormControl(""),
    dailyRate: new FormControl(""),
    carImage: new FormControl(""),
    regNo: new FormControl(""),
  })

  onSaveCar(){
    const formValue = this.carForm.value;
    this.carService.createCar(formValue).subscribe((res:any) => {
      if(res.result) {
        alert("Record creation success");
        this.getCars();
      } else {
        alert(res.message);
      }
    })
  }

  onEdit(data: any){
    this.carForm =  new FormGroup({
      carId: new FormControl(data.carId),
      brand: new FormControl(data.brand),
      model: new FormControl(data.model),
      year: new FormControl(data.year),
      color: new FormControl(data.color),
      dailyRate: new FormControl(data.dailyRate),
      carImage: new FormControl(data.carImage),
      regNo: new FormControl(data.regNo),
    })
  }

  addNew(){
    this.carForm = new FormGroup({
      carId: new FormControl(0),
      brand: new FormControl(""),
      model: new FormControl(""),
      year: new FormControl(""),
      color: new FormControl(""),
      dailyRate: new FormControl(""),
      carImage: new FormControl(""),
      regNo: new FormControl(""),
    })
  }

  onUpdateCar(){
    const formValue = this.carForm.value;
    this.carService.updateCar(formValue).subscribe((res: any)=> {
      if(res.result) {
        alert("Update has been done");
        this.getCars();
      } else {
        alert(res.message);
      }
    })
  }

  onDelete(id: number){
    const isDelete = confirm("Do you want to delete");
    if(isDelete){
      this.carService.deleteCar(id).subscribe((res: any)=>{
        if(res.result){
          alert("Record has been deleted");
          this.getCars();
        } else {
          alert(res.message);
        }
      })
    }
  }
}
