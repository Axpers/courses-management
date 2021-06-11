import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesListService {

  constructor() { }

  courses = [
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
}
