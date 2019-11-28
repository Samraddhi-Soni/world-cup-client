import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  team={
    "Id":"",
    "Country":"",
    "Year":"",
    "NoofTeam":"",
    "Venue":""
  };

  constructor(private service:DataService,
              private route:ActivatedRoute,
              private router:Router) 
  { }

  ngOnInit() 
  {
        this.route.paramMap.subscribe((result)=>{
         let Venue=result.get("Venue");
         console.log(Venue);
         let observableResult=this.service.Delete(Venue);
         observableResult.subscribe((record)=>{
            console.log(record);
            this.router.navigate(['home']);
         });

    });
  
  }

}
