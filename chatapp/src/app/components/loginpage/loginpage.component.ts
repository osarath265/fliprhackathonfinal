import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

loginForm = this.fb.group(
  {
    userName:['',[Validators.required]],
    password:['',[Validators.required]]
  }
)
signUpForm = this.fb.group(
  {
    email:['',[Validators.required,Validators.email]],
    username:['',[Validators.required,Validators.minLength(8)]],
    password:['',Validators.required],
    confirmPassword:['',Validators.required]
  }
)
onSubmit()
{
  console.log(this.loginForm.value);
}
Submit()
{
  console.log(this.signUpForm.value);
}

}
