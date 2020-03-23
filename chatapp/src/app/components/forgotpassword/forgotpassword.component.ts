import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForpassService } from 'src/app/services/forpass.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  public mail:any;
  constructor(private fb:FormBuilder,private fp:ForpassService) {

  }
  sent:boolean=false;
  forgotForm = this.fb.group(
    {
      email:['',[Validators.required,Validators.email]]
    }
  )
  ngOnInit() {
  }
send()
{
  console.log(this.forgotForm.value);
  this.sent=true;
  this.fp.receivemail(this.forgotForm.value).subscribe(data=>
    {
      console.log(data);
      this.fp.localemail=data;
      console.log("localemail",this.fp.localemail);
    },
    err=>
    {
      console.log(err);
    }
    );
}

}

