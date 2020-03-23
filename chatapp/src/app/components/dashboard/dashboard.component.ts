import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms'
import { PostlogindataService } from 'src/app/services/postlogindata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  
  constructor(private fb:FormBuilder,private pl:PostlogindataService) { 
    console.log(this.pl.email);
  }


   createBoard = this.fb.group(
     {
       boardname:['',[Validators.required]]
     }
   )
    

   createboard()
   {
      console.log(this.createBoard.value);
      console.log("at dashborad ts",this.pl.email); 
   }
   
  ngOnInit() {
  }

}
