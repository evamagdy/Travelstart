import { Component, OnInit } from '@angular/core';
/*import two libraries 
1- for get the data from the Form
2-for import The AuthService
*/
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../shared/Auth/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthServiceService) { }

  ngOnInit() {
  }


//for signup the client and handle the data that coming from the Form
  onSignup(form: NgForm)
  {
    this.authService.signup(form.value.username,form.value.email,form.value.password)
    .subscribe(
      response=>console.log(response),
      error=>console.log(error)
    );
  }
}
