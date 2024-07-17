import { Component, inject} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(""),
    password: new FormControl("")
  })

  router = inject(Router);

  onLogin(){
    const loginObj = this.loginForm.value;
    if(loginObj.userName === "admin" && loginObj.password === "1234") {
      this.router.navigateByUrl("/dashboard");
    } else {
      alert("Login details are wrong")
    }
  }
}