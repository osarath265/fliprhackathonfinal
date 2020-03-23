import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgControlStatus } from '@angular/forms';
import { ForpassService } from 'src/app/services/forpass.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute, Router } from '@angular/router';
import { toUnicode } from 'punycode';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  public mail:any;
  set_flag:boolean=false;
  constructor(private fb: FormBuilder,private fp:ForpassService,private route:ActivatedRoute,private router:Router) { 
    console.log("data at reset service",this.fp.localemail);
    this.mail = this.route.snapshot.paramMap.get('email');
    console.log("email at reset",this.mail);
  }

  ngOnInit() {}

  resetpassword = this.fb.group(
    {
      email: ['',[Validators.required]],
      password: ['', [Validators.required]]
    }
  )
  update()
  {
    console.log(this.resetpassword.value);
    this.fp.newpassword(this.resetpassword.value).subscribe(data=>
      {
        this.set_flag=true;
        console.log(data);
        setTimeout(()=>{
          this.router.navigate(['/loginpage']);
        },5000);

      },
      err=>
      {
        console.log(err);
      }
      )
  }
}
