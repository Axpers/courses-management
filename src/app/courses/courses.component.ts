import {Component, OnInit} from '@angular/core';
import {CoursesListService} from '../shared/courses-list.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      name: '',
      description: '',
      percentageComplete: 0,
      favorite: false,
    }
  ];

  constructor(private coursesService: CoursesListService) {
  }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.courses = this.coursesService.courses;
  }

}
