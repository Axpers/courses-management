import {Injectable} from '@angular/core';
import {Course} from './types/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesListService {

  constructor() {
  }

  private courses: Course[] = [
    {
      id: 0,
      name: 'cours1Nom',
      description: 'cours1Description',
      percentageComplete: 10,
      favorite: true,
    },
    {
      id: 1,
      name: 'cours2Nom',
      description: 'cours2Description',
      percentageComplete: 50,
      favorite: false,
    }
  ];

  getAllCourses() {
    return this.courses;
  }

  deleteCourse(course: Course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  createCourse(course: Course) {
    this.courses.push(course);
  }

  updateCourse(course: Course) {
    const courses = this.courses;
    const index = courses.findIndex(v => v.id === course.id);
    courses[index] = {...course};
  }

  updateOrCreate(course: Course) {
    const itExists = this.courses.find(v => v.id === course.id);
    if (itExists) {
      this.updateCourse(course);
      console.log('Course updated!', course);
    } else {
      course.id = this.courses.length;
      this.createCourse(course);
      console.log('Course created!', course);
    }
  }
}


