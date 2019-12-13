import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../model/Student';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StrudentService {

  constructor(private http:HttpClient) { }
  url ="http://localhost:8080/students/";
  // fungsi getAll
  getAll() : Observable<Student[]>{
     return this.http.get<Student[]>(this.url);

  }
  
}
