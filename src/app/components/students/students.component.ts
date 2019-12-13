import { Component, OnInit } from '@angular/core';
import { StrudentService } from 'src/app/services/strudent.service';
import { Student } from 'src/app/model/Student';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[];
  student: Student;

  constructor(private studentservice: StrudentService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
     this.studentservice.getAll().subscribe(data => {
      this.students = data['data'];
    })
  }
}
