import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { PostlogindataService } from 'src/app/services/postlogindata.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {


  passwordwrong:boolean=false;
  constructor(private fb:FormBuilder,private postsignup:PostlogindataService,private router:Router ) { }

  ngOnInit() {
  }

loginForm = this.fb.group(
  {
    email:['',[Validators.required,Validators.email]],
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
  this.postsignup.verifydata(this.loginForm.value).subscribe(data=>
    {
      console.log(data);
    this.router.navigate(['/dashboard']);
    },
    err=>
    {
      this.passwordwrong = true;
      console.log(err);
    }
    )
}
Submit()
{
  console.log(this.signUpForm.value);
  //this.postsignup.usersignUpData=this.signUpForm.value;
  this.postsignup.postdata(this.signUpForm.value).subscribe(data=>
    {
      console.log(data);
    },
    err=>
    {
      console.log(err);
    }
    );
}

}
