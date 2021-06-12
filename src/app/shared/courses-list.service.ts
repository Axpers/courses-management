import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesListService {

  constructor() {
  }

  private courses = [
    {
      id: 1,
      name: 'cours1Nom',
      description: 'cours1Description',
      percentageComplete: 10,
      favorite: true,
    },
    {
      id: 2,
      name: 'cours2Nom',
      description: 'cours2Description',
      percentageComplete: 50,
      favorite: false,
    }
  ];

  getAllCourses() {
    return this.courses;
  }

  deleteCourse(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  createCourse(course) {
    this.courses.push(course);
  }

  modifyCourse(course) {
  }
}


