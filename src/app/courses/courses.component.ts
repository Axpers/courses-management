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
    this.loadCourses();
  }

  resetSelectedCourse() {
    this.selectedCourse = {
      id: null,
      name: '',
      description: '',
      percentageComplete: 0,
      favorite: null,
    };
  }

  getCourses() {
    this.courses = this.coursesService.getAllCourses();
  }

  loadCourses() {
    this.resetSelectedCourse();
    this.getCourses();
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  deleteCourse(course) {
    this.coursesService.deleteCourse(course);
  }

  submitCourse(course) {
    const courses = (this.coursesService.getAllCourses()).filter(v => v.id === course.id);
    if (courses.length === 0) {
      course.id = courses.length;
      this.coursesService.createCourse(course);
      console.log('Course created!', course);
    } else {
      this.coursesService.updateCourse(course);
      console.log('Course updated!', course);
    }
    this.loadCourses();
  }

}
