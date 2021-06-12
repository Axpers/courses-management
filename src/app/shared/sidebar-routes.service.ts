import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarRoutesService {

  constructor() {
  }

  private routes = [
    {path: '/courses', icon: 'view_list', name: 'Courses'}
  ];

  getRoutes() {
    return this.routes;
  }
}

