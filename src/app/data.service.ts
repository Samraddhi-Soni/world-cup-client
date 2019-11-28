import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private helper:HttpClient) 
  { }

  Select()
  {
    return this.helper.get("http://localhost:3434/list");
  }

  Delete(Venue)
  {
    return this.helper.delete("http://localhost:3434/list/"+Venue);
  }

  Insert(Team)
  {
    return this.helper.post("http://localhost:3434/list/",Team);
  }
}
