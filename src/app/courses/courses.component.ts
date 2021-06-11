import {Component, OnInit} from '@angular/core';
import {CoursesListService} from '../shared/courses-list.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = [];

  selectedCourse = null;

  constructor(private coursesService: CoursesListService) {
  }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    return this.courses = this.coursesService.courses;
  }

  selectCourse(course) {
    return this.selectedCourse = course;
  }

  deleteCourse(course) {
    const courses = this.coursesService.courses;
    courses.splice(courses.indexOf(course), 1);
  }
}
