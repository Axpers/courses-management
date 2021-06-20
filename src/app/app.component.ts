import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SidebarRoutesService} from './shared/sidebar-routes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title: 'AngularProject';
  routes = [];

  constructor(private router: Router, private sidebarRoutesService: SidebarRoutesService) {
  }

  ngOnInit(): void {
    this.getRoutes();
  }

  getRoutes() {
    this.routes = this.sidebarRoutesService.getRoutes();
  }

  linkToLoginComponent() {
    this.router.navigateByUrl('/login');
  }
}
