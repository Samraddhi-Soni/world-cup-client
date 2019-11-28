import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   Team={
    "Id":"",
    "Country":"",
    "Year":"",
    "NoofTeam":"",
    "Venue":""
  };

  constructor(private service:DataService,
              private route:ActivatedRoute) 
  { }

  ngOnInit() 
  {

  }

  Insert()
  {
    this.route.paramMap.subscribe((records)=>{
      console.log(records);
      //this.Team=records;
    });
      
    let observableResult = this.service.Insert(this.Team);
    observableResult.subscribe((result)=>{
         console.log(result);
    });
    


  }
}
