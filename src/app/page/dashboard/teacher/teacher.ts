
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.html',
  styleUrl: './teacher.css',
})
export class Teacher {
  teachers: any=null;
  constructor(private http:HttpClient){
    this.getAll();
  }
  getAll(){
    this.http.get('http://localhost:8080/teacher/getAll').subscribe(data=>{
      console.log(data);
      this.teachers=data;
    })
  }
}
