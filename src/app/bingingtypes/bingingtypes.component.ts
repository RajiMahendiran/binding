import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-bingingtypes',
  templateUrl: './bingingtypes.component.html',
  styleUrls: ['./bingingtypes.component.css']

})
export class BingingtypesComponent implements OnInit {
  name = "RAJI";
  src1="/assets/success.jpg";
  width1="200";
  height1="200";
  
  title ="";
  clickme(){
    this.title ="THIS IS EVENT BINDING";
  }
 raji="";
  src2="/assets/vdo.mp4";
  width2="200";
  height2="200";

  constructor() { }

  ngOnInit(): void {
  }

}
